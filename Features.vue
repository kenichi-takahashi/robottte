<template>
	<section class="features main-section">
		<LinkPoint :destination="'features'"/>
		<SectionTitle>
			<h3>HRモンスターの<span class="emphasis">特徴</span></h3>
		</SectionTitle>
		<template v-for="(card, idx) in cards">
			<FeatureBlock
				:key="idx"
				:idx="idx"
				:img="card.img"
				:title="card.title"
				:description="card.description"
				:class="{'feature-block': idx >= 1, 'not-last-block': idx !== cards.length - 1}"
			/>
		</template>
	</section>
</template>

<script>
import SectionTitle from '@/components/LP/atoms/SectionTitle'
import FeatureBlock from '@/components/LP/molecules/FeatureBlock'
import LinkPoint from '@/components/LP/atoms/LinkPoint'

export default {
	name: 'Features',
	components: {
		SectionTitle,
		FeatureBlock,
		LinkPoint
	},
	data() {
		const cards = [
			{
				img: require('@/assets/lp/feature_1.png'),
				title: '仮想労働者が人にお願いしにくい仕事を100％やりきります！',
				description: 'みんなの「日程調整業務」、本当は大切な仕事なんだけど... <br>そのような仕事も、正確にスピーディに、ロボだからこそ安定したパフォーマンスです。<br>カレンダー連携は、GoogleやOffice365、サイボウズとつながっています！'
			},
			{
				img: require('@/assets/lp/feature_2.png'),
				title: '100種類以上のロボが負担軽減、機会損失を回避',
				description: '日程調整業務から24時間対応業務、データの転記業務等、様々な業務を担うのがロボ。<br>休むことなく、安定したパフォーマンスで仕事をします。'
			},
			{
				img: require('@/assets/lp/feature_3.png'),
				title: '3分で無料登録できる！導入ハードルが低い！',
				description: 'あっという間に簡単に、誰でもできるシステム！費用対効果がしっかり見える！<br>まずは無料トライアルでお試し下さい。ロボの働きがしっかり見える！'
			},
		]
		return {
			cards
		}
	},
}
</script>

<style lang="scss" scoped>
.features {
	position: relative;
	padding-bottom: 80px;
}
.feature-block {
	margin-top: 80px;
}
@media screen and (max-width: 896px) {
	.not-last-block {
		margin-bottom: 40px !important;
	}
}
</style>