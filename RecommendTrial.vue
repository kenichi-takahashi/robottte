<template>
	<section class="recommend-trial-container">
		<slot></slot>
		<TrialButton :size="'large'" class="trial-button-component"/>
	</section>
</template>

<script>
import TrialButton from '@/components/LP/atoms/TrialButton'

export default {
	name: 'RecommendTrial',
	components: {
		TrialButton
	}
}
</script>

<style lang="scss" scoped>
.recommend-trial-container {
	text-align: center;
  background: -moz-linear-gradient(left, #D70370, #A81FF8);
  background: -webkit-linear-gradient(left, #D70370, #A81FF8);
  background: linear-gradient(to right, #D70370, #A81FF8);
	color: #ffffff;
	padding: 40px 24px;
}
.trial-button-component {
	margin-top: 16px;
}

@media screen and (max-width: 480px) {
	.recommend-trial-container {
    padding: 24px 8px;
  }
}
</style>