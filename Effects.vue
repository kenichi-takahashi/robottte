<template>
	<section class="effects main-section">
		<LinkPoint :destination="'effects'"/>
		<SectionTitle>
			<h2>導入の効果</h2>
		</SectionTitle>
		<div class="effect-card-container">
			<template v-for="(card, idx) in cards">
				<EffectCard
					:key="idx"
					:img="card.img"
					:title="card.title"
					:description="card.description"
					:class="{'margin-top': idx >= 1, 'not-last-block': idx !== cards.length - 1}"
				/>
			</template>
		</div>
	</section>
</template>
<script>
import SectionTitle from '@/components/LP/atoms/SectionTitle'
import EffectCard from '@/components/LP/atoms/EffectCard'
import LinkPoint from '@/components/LP/atoms/LinkPoint'

export default {
	name: 'Effects',
	components: {
		SectionTitle,
		EffectCard,
		LinkPoint
	},
	data() {
		const cards = [
			{
				img: require('@/assets/lp/effect_1.png'),
				title: '日程調整',
				description: '応募者に対してロボリンクを掲載したメールを送信するだけで、面接に必要な情報のやりとりが可能です。'
			},
			{
				img: require('@/assets/lp/effect_2.png'),
				title: '夜間休日対応',
				description: 'ロボなら３６５日２４時間働き続けることができます。夜間帯や休日も対応できる為、繋がりにくい応募者との調整も容易です。'
			},
			{
				img: require('@/assets/lp/effect_3.png'),
				title: '内定承諾率の変化',
				description: 'ロボを経由して、応募者の方に「隠れた心理」をヒアリングできます。その後のフォローで「抱えていた不安」や「ミスマッチ」などの懸念を払拭する事で内定承諾率の向上も可能です。'
			},
		]
		return {
			cards
		}
	},
}
</script>

<style lang="scss" scoped>
.effects {
	background-color: #E7FCFD;
	padding-bottom: 80px;
}
.effect-card-container {
	width: 95%;
	margin: auto;
}
.margin-top {
	margin: 80px auto 0 !important;
}
</style>