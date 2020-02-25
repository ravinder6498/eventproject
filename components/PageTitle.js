import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { withGalio } from 'galio-framework';

const PageTitleView = props => {
  console.log(props.styles.title);
  return (
    <Text style={ props.styles.title }>
      { props.children }
    </Text>
  )
}

const styles = (theme) => {
  console.log(theme.SIZES);
  return StyleSheet.create({
    title: {
      color: theme.COLORS.DRIBBBLE,
      fontSize: theme.SIZES.FONT * 2,
    },
  });
}

export const PageTitle = withGalio(PageTitleView, styles);
