
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import ConceptCard from '../../ui/koconut/components/ConceptCard';

// configure enzyme to work with React version 16
Enzyme.configure({ adapter: new Adapter() });

// describe('<ConceptCard /> component', () => {
//     const generateExercise = jest.fn()
//         .mockImplementation((a, b) => { return { concept: a, type: b } });
//     const getInstruction = jest.fn()
//         .mockImplementation((a, b) => { return { concept: a, type: b } });
//     const title = "abc";
//     const key = 2;
//     const concept = "zxcv";

//     it('Mounts correctly with props', () => {
//         const wrapper = mount(<ConceptCard
//             title={title}
//             key={key}
//             concept={concept}
//             generateExercise={generateExercise}
//             getInstruction={getInstruction}
//         />);
//         expect(wrapper.state().expand).toBe(false);
//         const wrapperProps = wrapper.props();
//         expect(wrapperProps.title).toBe(title);
//         expect(wrapperProps.concept).toBe(concept);
//         wrapper.unmount();
//     });