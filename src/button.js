import React from 'react'

// import { Button } from 'semantic-ui-react'

// const ButtonExampleEmphasis = () => (
//   <div>
//     <Button primary>Primary</Button>
//     <Button secondary>Secondary</Button>
//   </div>
// )

// export default ButtonExampleEmphasis


// import { Button, Icon } from 'semantic-ui-react'

// const ButtonExampleAnimated = () => (
//   <div>
//     <Button animated>
//       <Button.Content visible>Next</Button.Content>
//       <Button.Content hidden>
//         <Icon name='arrow right' />
//       </Button.Content>
//     </Button>
//     <Button animated='vertical'>
//       <Button.Content hidden>Shop</Button.Content>
//       <Button.Content visible>
//         <Icon name='shop' />
//       </Button.Content>
//     </Button>
//     <Button animated='fade'>
//       <Button.Content visible>Sign-up for a Pro account</Button.Content>
//       <Button.Content hidden>$12.99 a month</Button.Content>
//     </Button>
//   </div>
// )

// export default ButtonExampleAnimated



import { Button, Icon } from 'semantic-ui-react'
import './button.css';

const ButtonExampleSocial = () => (
  <div>
    <Button color='facebook' >
      <Icon name='facebook' /> Facebook
    </Button>
    <Button color='twitter'>
      <Icon name='twitter' /> Twitter
    </Button>
    <Button color='google plus'>
      <Icon name='google plus' /> Google Plus
    </Button>
    {/* <Button color='vk'>
      <Icon name='vk' /> VK
    </Button> */}
    <Button color='linkedin' >
      <Icon name='linkedin' /> LinkedIn
    </Button>
    <Button color='instagram'>
      <Icon name='instagram' /> Instagram
    </Button>
    <Button color='youtube'>
      <Icon name='youtube' /> YouTube
    </Button>
  </div>
)

export default ButtonExampleSocial


