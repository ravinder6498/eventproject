import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Button as GailoButton } from 'galio-framework';

export class Button extends Component {
  
  componentDidMount() {

  }

  componentDidUpdate() {
    
  }

  render() {
    const { children, ...rest } = this.props;
    return (
      <GailoButton { ...rest }>
        { children }
      </GailoButton>
    );
  }
}

// export const Button = props => {
//   const { children, ...rest } = props;
//   return (
//     <GailoButton { ...rest }>
//       { props.children }
//     </GailoButton>
//   );
//   // return (
//   //   <TouchableOpacity 
//   //     style={{
//   //       backgroundColor: props.secondary ? 'red' : '#fff',
//   //       borderWidth: 1,
//   //       borderColor: buttonColor,
//   //       padding: 12,
//   //     }}
//   //     onPress={ props.onPress }>
//   //     <Text h4 muted={ props.disabled }>{ props.title }</Text>
//   //   </TouchableOpacity>
//   // );
// }