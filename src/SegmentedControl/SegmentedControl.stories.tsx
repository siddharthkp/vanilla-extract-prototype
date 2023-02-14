import * as React from 'react';
import { EyeIcon, FileCodeIcon, PeopleIcon } from '@primer/octicons-react';
import { SegmentedControl } from './SegmentedControl';

export default {
  title: 'Components/SegmentedControl/Features',
  component: SegmentedControl
};

export const Default = () => (
  <>
    <SegmentedControl aria-label="File view" style={{ marginLeft: 16 }}>
      <SegmentedControl.Button selected>Preview</SegmentedControl.Button>
      <SegmentedControl.Button>Raw</SegmentedControl.Button>
      <SegmentedControl.Button>Blame</SegmentedControl.Button>
    </SegmentedControl>

    <br />
    <br />
  </>
);

export const WithIcons = () => (
  <>
    <SegmentedControl aria-label="File view" style={{ marginLeft: 16 }}>
      <SegmentedControl.Button selected aria-label={'Preview'} leadingIcon={EyeIcon}>
        Preview
      </SegmentedControl.Button>
      <SegmentedControl.Button aria-label={'Raw'} leadingIcon={FileCodeIcon}>
        Raw
      </SegmentedControl.Button>
      <SegmentedControl.Button aria-label={'Blame'} leadingIcon={PeopleIcon}>
        Blame
      </SegmentedControl.Button>
    </SegmentedControl>
    <br />
    <br />
  </>
);

export const FullwidthAll = () => (
  <SegmentedControl aria-label="File view" fullWidth>
    <SegmentedControl.Button selected aria-label={'Preview'} leadingIcon={EyeIcon}>
      Preview
    </SegmentedControl.Button>
    <SegmentedControl.Button aria-label={'Raw'} leadingIcon={FileCodeIcon}>
      Raw
    </SegmentedControl.Button>
    <SegmentedControl.Button aria-label={'Blame'} leadingIcon={PeopleIcon}>
      Blame
    </SegmentedControl.Button>
  </SegmentedControl>
);

export const FullwidthNarrow = () => (
  <SegmentedControl aria-label="File view" fullWidth={{ narrow: true, regular: false, wide: false }}>
    <SegmentedControl.Button selected aria-label={'Preview'} leadingIcon={EyeIcon}>
      Preview
    </SegmentedControl.Button>
    <SegmentedControl.Button aria-label={'Raw'} leadingIcon={FileCodeIcon}>
      Raw
    </SegmentedControl.Button>
    <SegmentedControl.Button aria-label={'Blame'} leadingIcon={PeopleIcon}>
      Blame
    </SegmentedControl.Button>
  </SegmentedControl>
);

export const FullwidthRegular = () => (
  <SegmentedControl aria-label="File view" fullWidth={{ narrow: false, regular: true, wide: false }}>
    <SegmentedControl.Button selected aria-label={'Preview'} leadingIcon={EyeIcon}>
      Preview
    </SegmentedControl.Button>
    <SegmentedControl.Button aria-label={'Raw'} leadingIcon={FileCodeIcon}>
      Raw
    </SegmentedControl.Button>
    <SegmentedControl.Button aria-label={'Blame'} leadingIcon={PeopleIcon}>
      Blame
    </SegmentedControl.Button>
  </SegmentedControl>
);

export const IconOnly = () => (
  <SegmentedControl aria-label="File view">
    <SegmentedControl.Button selected aria-label={'Preview'} leadingIcon={EyeIcon} />
    <SegmentedControl.Button aria-label={'Raw'} leadingIcon={FileCodeIcon} />
    <SegmentedControl.Button aria-label={'Blame'} leadingIcon={PeopleIcon} />
  </SegmentedControl>
);

// export const Controlled = () => {
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const handleChange = (i: number) => {
//     setSelectedIndex(i);
//   };
//   return (
//     <SegmentedControl aria-label="File view" onChange={handleChange}>
//       <SegmentedControl.Button selected={selectedIndex === 0}>Preview</SegmentedControl.Button>
//       <SegmentedControl.Button selected={selectedIndex === 1}>Raw</SegmentedControl.Button>
//       <SegmentedControl.Button selected={selectedIndex === 2}>Blame</SegmentedControl.Button>
//     </SegmentedControl>
//   );
// };

// export const VariantNarrowHideLabels = () => (
//   <SegmentedControl aria-label="File view" variant={{ narrow: 'hideLabels', regular: 'default', wide: 'default' }}>
//     <SegmentedControl.Button selected aria-label={'Preview'} leadingIcon={EyeIcon}>
//       Preview
//     </SegmentedControl.Button>
//     <SegmentedControl.Button aria-label={'Raw'} leadingIcon={FileCodeIcon}>
//       Raw
//     </SegmentedControl.Button>
//     <SegmentedControl.Button aria-label={'Blame'} leadingIcon={PeopleIcon}>
//       Blame
//     </SegmentedControl.Button>
//   </SegmentedControl>
// );
// VariantNarrowHideLabels.storyName = '[variant: narrow] Hide labels';

// export const VariantNarrowActionMenu = () => (
//   <SegmentedControl aria-label="File view" variant={{ narrow: 'dropdown', regular: 'default', wide: 'default' }}>
//     <SegmentedControl.Button selected aria-label={'Preview'} leadingIcon={EyeIcon}>
//       Preview
//     </SegmentedControl.Button>
//     <SegmentedControl.Button aria-label={'Raw'} leadingIcon={FileCodeIcon}>
//       Raw
//     </SegmentedControl.Button>
//     <SegmentedControl.Button aria-label={'Blame'} leadingIcon={PeopleIcon}>
//       Blame
//     </SegmentedControl.Button>
//   </SegmentedControl>
// );
// VariantNarrowActionMenu.storyName = '[variant: narrow] Action menu';

// // TODO: make it possible to use FormControl as a wrapper for SegmentedControl
// // - FormControl.Label needs to accept a prop that lets it render an element that isn't a `<label>`
// export const AssociatedWithALabelAndCaption = () => (
//   <Box display="flex">
//     <Box flexGrow={1}>
//       <Text fontSize={2} fontWeight="bold" id="scLabel-vert" display="block">
//         File view
//       </Text>
//       <Text color="fg.subtle" fontSize={1} id="scCaption-vert" display="block">
//         Change the way the file is viewed
//       </Text>
//     </Box>
//     <SegmentedControl aria-labelledby="scLabel-vert" aria-describedby="scCaption-vert">
//       <SegmentedControl.Button selected>Preview</SegmentedControl.Button>
//       <SegmentedControl.Button>Raw</SegmentedControl.Button>
//       <SegmentedControl.Button>Blame</SegmentedControl.Button>
//     </SegmentedControl>
//   </Box>
// );
// AssociatedWithALabelAndCaption.storyName = '[Example] Associated with a label and caption';
