import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Section, Override, StackItem, Stack, SocialMedia, Menu } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section quarkly-title="Header" width="100%" position="fixed" z-index="99">
			<Box
				display="flex"
				padding="1.4rem 2rem 1.4rem 2rem"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
				box-shadow="0px 15px 20px 0px rgba(0, 0, 0, 0.3)"
				border-radius="10px"
				background="#ffffff"
			>
				<Image
					width="auto"
					height="90%"
					src="https://hsnu.org/static/HSNU-a43ddeb36308c56bba8a118a4b2db793.svg"
					max-width="24vw"
					quarkly-title="Icon"
				/>
				<Box
					width="45%"
					display="flex"
					justify-content="space-between"
					align-items="center"
					font="700 17px --fontFamily-googleNotoSerifTc"
				>
					<Components.NavbarLink />
					<Components.NavbarLink>
						閱覽室
					</Components.NavbarLink>
					<Components.NavbarLink>
						行事曆
					</Components.NavbarLink>
					<Components.NavbarLink>
						段考
					</Components.NavbarLink>
					<Components.NavbarLink>
						國中部
					</Components.NavbarLink>
					<Image width="auto" height="1.6rem" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0yMy44MDkgMjEuNjQ2TDE3LjYwNCAxNS40NDFDMTguNzcxIDEzLjgzNiAxOS40NjEgMTEuODYyIDE5LjQ2MSA5LjczQzE5LjQ2MSA0LjM2NSAxNS4wOTYgMCA5LjczIDBDNC4zNjUgMCAwIDQuMzY1IDAgOS43M0MwIDE1LjA5NiA0LjM2NSAxOS40NiA5LjczIDE5LjQ2QzExLjc2NCAxOS40NiAxMy42NTMgMTguODMzIDE1LjIxNyAxNy43NjJMMjEuNDU1IDI0TDIzLjgwOSAyMS42NDZaTTIuODU0IDkuNzNDMi44NTQgNS45MzggNS45MzkgMi44NTMgOS43MzEgMi44NTNDMTMuNTIzIDIuODUzIDE2LjYwOCA1LjkzOCAxNi42MDggOS43M0MxNi42MDggMTMuNTIyIDEzLjUyMyAxNi42MDcgOS43MzEgMTYuNjA3QzUuOTM4IDE2LjYwNyAyLjg1NCAxMy41MjIgMi44NTQgOS43M1oiIGZpbGw9ImJsYWNrIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDAiPgo8cGF0aCBkPSJNMCAwSDI0VjI0SDBWMFoiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==" />
				</Box>
			</Box>
		</Section>
		<Section
			background="linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%),url(https://images4.alphacoders.com/287/287326.jpg) center/cover no-repeat"
			padding="64px 0"
			sm-padding="40px 0"
			color="--light"
			font="normal 300 16px/1.5 --fontFamily-googleNotoSerifTc"
			height="65vh"
			position="relative"
			align-items="flex-end"
			justify-content="start"
		>
			<Stack>
				<StackItem width="75%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text as="h1" font="normal 600 72px/1.2 --fontFamily-googleNotoSerifTc" md-font="--headline2" margin="10px 0">
						師大附中
						<br />
						夢想的搖籃
					</Text>
					<Text
						color="--lightD2"
						letter-spacing="1px"
						text-transform="uppercase"
						margin="0"
						font="600 16px/24px "
					>
						HSNU - Where the dream start
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Stack color="--grey" font="--base">
				<StackItem
					width="50%"
					md-width="100%"
					display="flex"
					flex-direction="column"
					flex-wrap="wrap"
					height="auto"
				>
					<Text
						as="h1"
						margin="0px"
						font="--headline1"
						md-font="--headline2"
						color="--dark"
						align-self="flex-end"
						display="block"
						width="100%"
					>
						Heading
					</Text>
					<Text
						as="h1"
						margin="0px"
						font="--headline1"
						md-font="--headline2"
						color="--dark"
						align-self="flex-end"
						display="block"
						width="100%"
					>
						Heading
					</Text>
				</StackItem>
				<StackItem width="50%" md-width="100%">
					<Text margin="0px">
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section padding="60px 0" sm-padding="40px 0">
			<SocialMedia
				facebook="https://www.facebook.com/quarklyapp/"
				twitter="https://twitter.com/quarklyapp"
				youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
				vkontakte="https://vk.com/quarklyapp"
				telegram="https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
			>
				<Override
					slot="link"
					border-radius="50%"
					color="--light"
					margin="0 8px"
					background="--color-grey"
					hover-background="--color-greyD1"
				/>
			</SocialMedia>
		</Section>
		<Section
			background-color="--dark"
			text-align="center"
			padding="32px 0"
			background="#ffffff"
			color="#000000"
		>
			<Menu
				display="flex"
				justify-content="center"
				font="--lead"
				font-weight="700"
				margin="-6px 0 16px"
				md-flex-direction="column"
				md-align-items="center"
			>
				<Override slot="link" text-decoration="none" color="--light" padding="6px 12px" />
				<Override slot="link-active" color="--primary" />
				<Override slot="item" padding="6px 0px" />
			</Menu>
			<Link
				href="mailto:hello@company.com"
				text-decoration-line="none"
				variant="--base"
				color="--grey"
				hover-color="--primary"
			>
				hello@company.com
			</Link>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});