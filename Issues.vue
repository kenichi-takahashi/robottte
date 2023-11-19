<template>
	<section class="issues-container main-section">
		<LinkPoint :destination="'issues'"/>
		<div class="issues-wrapper">
			<SectionTitle>
				<h3>雑務が... かといって誰か一人雇うほどでも...<br>こんなお悩みHRモンスターが<span class="emphasis">解決</span>します！</h3>
			</SectionTitle>
			<div class="issues-card-container">
				<div class="issues-card-wrapper">
					<template v-for="(card, idx) in cards">
						<IssueCard
							:key="idx"
							:idx="idx"
							:img="card.img"
							:title="card.title"
							:description="card.description"
							:numberImg="card.numberImg"
							:class="{'card-margin': idx >= 1}"
						/>
					</template>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import SectionTitle from '@/components/LP/atoms/SectionTitle'
import IssueCard from '@/components/LP/atoms/IssueCard'
import LinkPoint from '@/components/LP/atoms/LinkPoint'

export default {
	name: 'Issue',
	components: {
		SectionTitle,
		IssueCard,
		LinkPoint
	},
	data () {
		const cards = [
			{
				img: require('@/assets/lp/issue1.png'),
				alt: '1',
				title: '日程の調整雑務ばかり...（人事担当者）',
				description: '日程調整のこのメールのやりとり、なんとかならないかなぁ... <br>でも間違えられないし... 正確に早くやってくれる人いないかな...<br>応募があって嬉しいのだけど...',
				numberImg: require('@/assets/lp/number1.png')
			},
			{
				img: require('@/assets/lp/issue2.png'),
				alt: '2',
				title: '夜間や土日の対応...（営業コール対応者）',
				description: '土日や夜遅くまでコール対応する業務... <br>確かに機会損失しないようにというのはわかるけど、<br>ロボットみたいに同じ説明内容...誰かにふれないかな。',
				numberImg: require('@/assets/lp/number2.png')
			},
			{
				img: require('@/assets/lp/issue3.png'),
				alt: '3',
				title: '日々たまってく事務作業...（事務業務対応者）',
				description: '機械みたいに決まりきったルーティン業務... <br>面倒くさい仕事を嫌な顔せずにやる人いない...？<br>転記業務も面倒くさいなぁ...',
				numberImg: require('@/assets/lp/number3.png')
			},
		]
		return {
			cards
		}
	}
}
</script>

<style lang="scss" scoped>
.issues-container {
	background-color: #F5E6FE;
	padding-bottom: 160px;
}
.card-margin {
	margin-top: 106px;
}
.issues-card-container {
	display: flex;
	justify-content: space-evenly;
	width: 95%;
	margin: auto;
}
@media screen and (max-width: 480px) {
	.issues-container {
		h3 {
			br {
				display: none;
			}
		}
	}
}
</style>