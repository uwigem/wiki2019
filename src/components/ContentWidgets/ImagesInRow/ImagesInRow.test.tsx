import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ImgRowItem, ImagesInRow } from './ImagesInRow';
import { ImagesInRowEditor } from './ImagesInRowEditor';
import { ContentSingularData } from '../../_data/ContentSingularData';

// configure enzyme to work with React version 16
Enzyme.configure({ adapter: new Adapter() });

describe("ImagesInRow component", () => {
    const emptyProps: ImgRowItem[] = [];
    it("mounts correctly with no props", () => {
        mount(<ImagesInRow imagesInRow_items={emptyProps} />);
    });

    const fakeProps: ImgRowItem[] = [
        {
            imgLink: 'http://2018.igem.org/wiki/images/c/c0/T--Washington--Ingrid.png',
            imgCaption: 'Dr. Ingrid Pultz, Washington iGEM alum, PVP Biologics',
            imgAltTag: 'fake alt text 1',
            externalLink: 'fake ext link1'
        },
        {
            imgLink: 'http://2018.igem.org/wiki/images/5/5e/T--Washington--David.png',
            imgCaption: 'Dr. David Younger, Washington iGEM alum, A-Alpha Bio',
            imgAltTag: 'fake alt text 2',
            externalLink: 'fake ext link2'
        }
    ];
    it("mounts correctly with fake props", () => {
        mount(<ImagesInRow imagesInRow_items={fakeProps} />);
    });

    it("generates correct image row item content", () => {
        const wrapper = mount(<ImagesInRow imagesInRow_items={fakeProps} />);
        expect(wrapper.find(".img-row-item").length).toEqual(fakeProps.length);
        expect(wrapper.find(".img-row-image").length).toEqual(fakeProps.length);
        fakeProps.map((fakeImgRowItem: ImgRowItem, i: number) => {
            expect(wrapper.find(".img-row-image").at(i).prop("src")).toEqual(fakeImgRowItem.imgLink);
            expect(wrapper.find(".img-row-caption").at(i).text()).toEqual(fakeImgRowItem.imgCaption);
            expect(wrapper.find(".img-row-image").at(i).prop("alt")).
                toEqual(fakeImgRowItem.imgAltTag);
            expect(wrapper.find(".img-row-item").at(i).find("figure").find("a").prop("href")).
                toEqual(fakeImgRowItem.externalLink);
        });
    });

    const fakePropsEmptyAltTag: ImgRowItem[] = [
        {
            imgLink: 'http://2018.igem.org/wiki/images/c/c0/T--Washington--Ingrid.png',
            imgCaption: 'Dr. Ingrid Pultz, Washington iGEM alum, PVP Biologics',
            imgAltTag: '',
            externalLink: 'fake ext link1'
        },
        {
            imgLink: 'http://2018.igem.org/wiki/images/5/5e/T--Washington--David.png',
            imgCaption: 'Dr. David Younger, Washington iGEM alum, A-Alpha Bio',
            imgAltTag: '',
            externalLink: 'fake ext link2'
        }
    ];
    /** caption should replace empty alt tag */
    it("generates correct image row item content w/ empty alt tag", () => {
        const wrapper = mount(<ImagesInRow imagesInRow_items={fakePropsEmptyAltTag} />);
        fakeProps.map((fakeImgRowItem: ImgRowItem, i: number) => {
            expect(wrapper.find(".img-row-image").at(i).prop("alt")).
                toEqual(fakeImgRowItem.imgCaption);
        });
    });

    const fakePropsEmptyExtLink: ImgRowItem[] = [
        {
            imgLink: 'http://2018.igem.org/wiki/images/c/c0/T--Washington--Ingrid.png',
            imgCaption: 'Dr. Ingrid Pultz, Washington iGEM alum, PVP Biologics',
            imgAltTag: 'fake alt text 1',
            externalLink: ''
        },
        {
            imgLink: 'http://2018.igem.org/wiki/images/5/5e/T--Washington--David.png',
            imgCaption: 'Dr. David Younger, Washington iGEM alum, A-Alpha Bio',
            imgAltTag: 'fake alt text 2',
            externalLink: ''
        }
    ];
    /** image link should replace empty external link */
    it("generates correct image row item content w/ empty external link", () => {
        const wrapper = mount(<ImagesInRow imagesInRow_items={fakePropsEmptyExtLink} />);
        fakeProps.map((fakeImgRowItem: ImgRowItem, i: number) => {
            expect(wrapper.find(".img-row-item").at(i).find("figure").find("a").prop("href")).
                toEqual(fakeImgRowItem.imgLink);
        });
    });
});

describe("ImagesInRowEditor component", () => {
    const fakeOriginalContent: ContentSingularData = { imagesInRow_items: undefined };
    const fakeEditedContent: ContentSingularData = { imagesInRow_items: undefined };
    const fakeSetEditedContentOnChange =
        jest.fn().mockImplementation((contentToUpdate: ImgRowItem[]) => {
            fakeEditedContent.imagesInRow_items = contentToUpdate;
        });

    it("mounts correctly", () => {
        mount(<ImagesInRowEditor
            originalContent={fakeOriginalContent}
            editedContent={fakeEditedContent}
            setEditedContentOnChange={fakeSetEditedContentOnChange} />)
    });

    /**
 * TESTS TO ADD
 * - Adding image w/o link fails to add img 
 * - Adding image without caption nor alt text fails to add image
 * - Add image works w/ just img link and caption
 *                                  ''and alt text     
 * - Img with external link on firebase opens when img is clicked
 *                                                   '' or caption is clicked
 * - Img without external link on firebase defaults to image link when clicked
 * - Delete removes all image data from firebase
 */
});