<template>
	<section class="key-message-container">
		<div class="key-message-wrapper">
			<div class="key-message-block">
				<h3>HRモンスターなら</h3>
				<h2>24時間365日業務をロボ社員におまかせ！</h2>
				<p class="sub-message">
					ヒトにお願いする前に、まずロボに！ あなたのその業務、ロボが実行します！
				</p>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'KeyMessage'
}
</script>

<style lang="scss" scoped>
.key-message-container {
  background: -moz-linear-gradient(left, #D70370, #A81FF8);
  background: -webkit-linear-gradient(left, #D70370, #A81FF8);
  background: linear-gradient(to right, #D70370, #A81FF8);
	color: #ffffff;
	padding: 40px 0;
}
.key-message-wrapper {
	width: 95%;
	margin: auto;
	display: flex;
	justify-content: center;
}
.key-message-block {
	.sub-message {
		margin-top: 16px;
	}
}
</style>