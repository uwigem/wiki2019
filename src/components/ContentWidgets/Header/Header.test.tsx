import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ContentSingularData } from '../../_data/ContentSingularData';
import { Header } from './Header';
import { HeaderEditor } from './HeaderEditor';
import { Color } from './HeaderConstants';

Enzyme.configure({ adapter: new Adapter() });

const emptyContent: ContentSingularData = {};
const fakeContent: ContentSingularData = {
    header_content: {
        header_text: "fake title",
        text_size: 5,
        text_color: Color.BLACK,
        image_link: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1192,w_2119,x_0,y_82/f_auto,q_auto,w_1100/v1562599409/shape/mentalfloss/587289-gettyimages-1085283872.jpg",
        image_blur: 1,
        image_zoom: 100,
        image_top_x: 0,
        image_top_y: 0
    }
}

describe("Header component", () => {
    it("mounts correctly with empty props", () => {
        mount(<Header header_content={emptyContent.header_content} />);
    });

    it("mounts correctly with fake props", () => {
        mount(<Header header_content={fakeContent.header_content} />);
    });
})

describe("HeaderEditor component", () => {
    const fakeSetEditedContentOnChange = jest.fn().mockImplementation(() => {
        return;
    });

    beforeEach(() => {
        fakeSetEditedContentOnChange.mockClear();
    });

    it("mounts correctly with empty props", () => {
        mount(<HeaderEditor 
                originalContent={emptyContent}
                editedContent={emptyContent}
                setEditedContentOnChange={fakeSetEditedContentOnChange}
             />);
    });

    it("mounts correctly with fake props", () => {
        mount(<HeaderEditor 
                originalContent={fakeContent}
                editedContent={fakeContent}
                setEditedContentOnChange={fakeSetEditedContentOnChange}
            />);
    });

    it("calls setEditedContentOnChange when the input updates", () => {
        const wrapper = mount(<HeaderEditor 
                originalContent={emptyContent}
                editedContent={emptyContent}
                setEditedContentOnChange={fakeSetEditedContentOnChange}
             />);
        let i = 0;
        wrapper.find("input").forEach((node) => {
            node.simulate("change");
            node.simulate("mouseUp");
            i++;
            expect(fakeSetEditedContentOnChange.mock.calls.length).toEqual(i);
        })
    });
})
