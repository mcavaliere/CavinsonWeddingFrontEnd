import React from 'react';
import { Navbar } from 'react-bootstrap';
var Menu = require('react-burger-menu').slide;

class Hamburger extends Navbar.Toggle {
	render() {
		return (
			<Menu customBurgerIcon={
					<span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</span>

			 }>
	          <a id="home" className="menu-item" href="/">Home</a>
	          <a id="about" className="menu-item" href="/about">About</a>
	          <a id="contact" className="menu-item" href="/contact">Contact</a>
	        </Menu>
		);
	}

	// <button type="button" className="navbar-toggle collapsed">
	// 	<span className="icon-bar"></span>
	// 	<span className="icon-bar"></span>
	// 	<span className="icon-bar"></span>
	// </button>
	//
	//
	// render = function render() {
	//     var _props = this.props,
	//         onClick = _props.onClick,
	//         className = _props.className,
	//         children = _props.children,
	//         props = (0, _objectWithoutProperties3['default'])(_props, ['onClick', 'className', 'children']);
	//
	//     var navbarProps = this.context.$bs_navbar || { bsClass: 'navbar' };
	//
	//     var buttonProps = (0, _extends3['default'])({
	//       type: 'button'
	//     }, props, {
	//       onClick: (0, _createChainedFunction2['default'])(onClick, navbarProps.onToggle),
	//       className: (0, _classnames2['default'])(className, (0, _bootstrapUtils.prefix)(navbarProps, 'toggle'), !navbarProps.expanded && 'collapsed')
	//     });
	//
	//     if (children) {
	//       return _react2['default'].createElement(
	//         'button',
	//         buttonProps,
	//         children
	//       );
	//     }
	//
	//     return _react2['default'].createElement(
	//       'button',
	//       buttonProps,
	//       _react2['default'].createElement(
	//         'span',
	//         { className: 'sr-only' },
	//         'Toggle navigation'
	//       ),
	//       _react2['default'].createElement('span', { className: 'icon-bar' }),
	//       _react2['default'].createElement('span', { className: 'icon-bar' }),
	//       _react2['default'].createElement('span', { className: 'icon-bar' })
	//     );
	//   };
}

console.warn("hamburger: ", Hamburger);

export default Hamburger;
