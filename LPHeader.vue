<template>
	<header>
		<div class="header-wrapper">
			<div class="header-left">
				<a href="/" class="logo-img-wrapper">
					<img class="monster-logo" src="@/assets/lp/logo.png" alt="モンスターのロゴ">
					<img class="title-logo" src="@/assets/lp/logo_blue.svg" alt="HRmonsterロゴ">
				</a>
			</div>
			<div class="header-right">
				<TrialButton :size="'small'"/>
				<LoginButton class="login-btn-component"/>
				<div class="responsive-1">
					<MenuButton @click.native="openMenu"/>
				</div>
			</div>
			<div class="responsive-2">
				<MenuButton @click.native="openMenu"/>
			</div>
		</div>
		<SlideMenu :isMenu="isMenu" @closeMenu="closeMenu"/>
	</header>
</template>

<script>
import TrialButton from '@/components/LP/atoms/TrialButton'
import LoginButton from '@/components/LP/atoms/LoginButton'
import SlideMenu from '@/components/LP/organisms/SlideMenu'
import MenuButton from '@/components/LP/atoms/MenuButton'
import menus from '@/mixins/menus'

export default {
	name: 'LPHeader',
	components: {
		TrialButton,
		LoginButton,
		SlideMenu,
		MenuButton
	},
	mixins: [menus],
	data () {
		return {
			isMenu: false
		}
	},
	methods: {
		openMenu () {
			this.isMenu = true
		},
		closeMenu () {
			this.isMenu = false
		}
	}
}
</script>

<style lang="scss" scoped>
header {
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05);
	width: calc(100%-15px);
	position: relative;
	top: 0;
	z-index: 10;
	background-color: #fefefe;
}
.header-wrapper {
	width: 95%;
	height: 80px;
	margin: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.header-left {
	display: flex;
	align-items: center;
}
.header-right {
	display: flex;
	align-items: center;
	margin-left: 16px;
}
.trial-button {
	background-color: #89EFF6;
}
.logo-img-wrapper {
	display: flex;
	justify-content: flex-start;
	.monster-logo {
		height: 38px;
	}
	.title-logo {
		height: 40px;
	}
}
.link-list {
	display: flex;
	margin-right: 32px;
	li {
		margin-left: 16px;
		font-size: 14px;
		font-weight: bold;
		a {
			color: #333333 !important;
		}
	}
	li:first-child {
		margin-left: 0;
	}
}
.login-btn-component {
	margin-left: 16px;
}
.menu-icon-wrapper {
	width: 16px;
	.menu-icon {
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
.responsive-1, .responsive-2 {
	display: none;
}

@media screen and (max-width: 1024px) {
	.link-list {
		display: none;
	}
	.responsive-1 {
		display: block;
		margin-left: 16px;
	}
}
@media screen and (max-width: 896px) {
	.header-wrapper {
		height: 48px;
	}
	.header-right {
		display: none;
	}
	.responsive-2 {
		display: block;
	}
	.menu-icon-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.logo-img-wrapper {
		display: flex;
		justify-content: flex-start;
		.monster-logo {
			height: 20px;
		}
		.title-logo {
			height: 22px;
		}
	}
}
</style>