<template>
	<section class="main-section">
		<LinkPoint :destination="'functions'"/>
		<div class="line"></div>
		<SectionTitle>
			<h3> HRモンスターが担当できる<span class="emphasis">業務</span>（採用業務例）</h3>
		</SectionTitle>
		<div class="card-container">
			<template v-for="(card, idx) in cards">
			<FunctionCard
				:key="idx"
				:img="card.img"
				:alt="card.alt"
				:name="card.name"
				:description="card.description"
			/>
			</template>
		</div>
	</section>
</template>

<script>
import SectionTitle from '@/components/LP/atoms/SectionTitle'
import FunctionCard from '@/components/LP/atoms/FunctionCard'
import LinkPoint from '@/components/LP/atoms/LinkPoint'

export default {
	name: 'Functions',
	components: {
		SectionTitle,
		FunctionCard,
		LinkPoint
	},
	data () {
		const cards = [
			{
				img: require('@/assets/lp/fukidashi.png'),
				name: '24時間自動受付',
				description: 'ロボをHPに置くだけで昼夜問わず、24時間受付対応。'
			},
			{
				img: require('@/assets/lp/calender.png'),
				name: '日程調整',
				description: 'ロボが自動でスケジュール管理。面接日程を自動で行ってくれる'
			},
			{
				img: require('@/assets/lp/rirekisho.png'),
				name: '応募者管理',
				description: '必要な情報が一目瞭然。応募者の諸情報から、履歴書の管理までも完全対応。'
			},
			{
				img: require('@/assets/lp/kyujin.png'),
				name: '求人票作成',
				description: '無制限で求人票の作成が可能。求職者のハートに一直線。'
			},
			{
				img: require('@/assets/lp/note.png'),
				name: '求人ノベルで会社紹介',
				description: '半端ない没入感。だから、会社のイロハがすぐわかる。'
			},
			{
				img: require('@/assets/lp/office.png'),
				name: 'ヴァーチャルオフィス',
				description: 'コロナ禍の救世主。疑似空間なのに、すぐそばにいる感覚。'
			}
		]
		return {
			cards
		}
	}
}
</script>

<style lang="scss" scoped>
.line {
	width: 80%;
	border-bottom: 2px solid #dbdbdb;
	margin: auto;
}
.card-container {
	margin: auto;
	max-width: 1200px;
	width: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	margin-bottom: 80px;
}
</style>