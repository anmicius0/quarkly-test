import React from "react";
import { useOverrides } from "@quarkly/components";
import { Link } from "@quarkly/widgets";
const defaultProps = {
	"href": "#",
	"quarkly-title": "Navbar Link",
	"text-decoration-line": "initial",
	"color": "#000000",
	"children": "二代校務"
};
const overrides = {};

const NavbarLink = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Link {...rest}>
		{children}
	</Link>;
};

Object.assign(NavbarLink, { ...Link,
	defaultProps,
	overrides
});
export default NavbarLink;