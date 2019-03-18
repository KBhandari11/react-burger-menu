'use strict';

const styles = {
  overlay(isOpen) {
    return {
      position: 'relative',
      zIndex: 1000,
      width: 'inherit',
      height: 'inherit',
      background: '#545454',
      opacity: isOpen ? 1 : 0,
      MozTransform: isOpen ? '' : 'translate3d(100%, 0, 0)',
      MsTransform: isOpen ? '' : 'translate3d(100%, 0, 0)',
      OTransform: isOpen ? '' : 'translate3d(100%, 0, 0)',
      WebkitTransform: isOpen ? '' : 'translate3d(100%, 0, 0)',
      transform: isOpen ? '' : 'translate3d(100%, 0, 0)',
      transition: isOpen ? 'opacity 0.3s' : 'opacity 0.3s, transform 0s 0.3s'
    };
  },
//this changes the width and the height of the menu
  menuWrap: function menuWrap(isOpen, width, right) {

    return {
      background: '$545454',
      position: 'absolute',
      right: right ? 0 : 'inherit',
      zIndex: 1100,
      width: '17%',
      height: '600px',
      MozTransform: isOpen ? '' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
      MsTransform: isOpen ? '' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
      OTransform: isOpen ? '' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
      WebkitTransform: isOpen ? '' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
      transform: isOpen ? '' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
      transition: 'all 0.0s'
    };
  },

  menu: function menu() {
    return {
      height: '75%',
      boxSizing: 'border-box',
      overflow: 'auto',

    };
  },

  itemList: function itemList() {
    return {
      height: '100%'
    };
  },

  item: function item() {
    return {
      display: 'block'
    };
  }
};
export default styles;
