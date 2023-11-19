<template>
	<section class="key-visual-container main-section">
		<LinkPoint :destination="'key_visual'"/>
		<div class="key-visual-wrapper">
			<div class="left-container">
				<h1 class="main-message">ロボ社員派遣で<br>工数とコストを7割削減</h1>
				<p class="sub-message-1">「この仕事、誰かにやってもらえたら…」</p>
				<p class="sub-message-2">そう思ったらロボにお願いするのが当たり前の社会へ！</p>
				<TrialButton :size="'large'" class="trial-button-component"/>
			</div>
			<div class="right-container">
				<div class="pc-img-wrapper">
					<img class="pc-img" src="@/assets/lp/pc.png" alt="PC">
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import TrialButton from '@/components/LP/atoms/TrialButton'
import LinkPoint from '@/components/LP/atoms/LinkPoint'

export default {
	name: 'KeyVisual',
	components: {
		TrialButton,
		LinkPoint
	}
}
</script>

<style lang="scss" scoped>
.key-visual-container {
	margin-top: 80px;
}
.pc-img-wrapper {
	max-width: 528px;
	width: 100%;
}
.pc-img {
	width: 100%
}
.main-message {
	line-height: 1;
	margin-bottom: 16px;
}
.key-visual-wrapper {
	width: 95%;
	margin: auto;
	height: 520px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.sub-message-2 {
	padding-top: 8px;
	margin-bottom: 32px;
	word-wrap: break-word;
}
.right-container {
	margin-left: 8px;
}
@media screen and (max-width: 1194px) {
	.pc-img-wrapper {
		max-width: 472px;
	}
}
@media screen and (max-width: 950px) {
	.key-visual-wrapper {
		flex-direction: column-reverse;
		height: 800px;
	}
	.left-container {
		text-align: center;
	}
	.main-message  {
		margin-top: 32px;
	}
}
@media screen and (max-width: 896px) {
	.key-visual-container {
		margin-top: 40px;
	}
}
@media screen and (max-width: 480px) {
	.key-visual-wrapper {
		height: 600px;
	}
	.main-message {
		line-height: 1.2;
	}
}
</style>