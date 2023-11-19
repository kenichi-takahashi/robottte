<template>
	<footer>
		<div class="center-area">
			<div class="white-logo-wrapper">
				<img class="white-logo" src="@/assets/lp/white_hrmonster.svg" alt="">
			</div>
			<div class="link-wrapper">
				<p>
					<a href="https://www.robottte.com/">運営会社</a>
				</p>
				<p class="terms">
					<a href="/terms">利用規約</a>
				</p>
				<p class="privacy-policy">
					<a href="https://storage.googleapis.com/hr-monster/privacy_policy_robottte.pdf">プライバシーポリシー</a>
				</p>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'LPFooter'
}
</script>

<style lang="scss" scoped>
footer {
	display: flex;
	justify-content: center;
	background-color: #202325;
	color: #ffffff;
	font-size: 14px;
	padding: 40px;
}
.center-area {
	text-align: center;
}
.white-logo {
	width: 180px;
}
.link-wrapper {
	display: flex;
	justify-content: center;
	margin-top: 16px;
	.privacy-policy, .terms {
		margin-left: 16px;
	}
	a {
		color: #ffffff;
		font-weight: bold;
	}
}
@media screen and (max-width: 896px) {
	.link-wrapper {
		display: block;
		.privacy-policy, .terms {
			margin-top: 8px;
			margin-left: 0; 
		}
	}
}
</style>