<template>
	<section class="questions-container main-section">
		<LinkPoint :destination="'questions'"/>
		<SectionTitle>
			<h2>よくあるご質問</h2>
		</SectionTitle>
		<div class="area-container">
			<div class="left-area">
				<div class="question-img-wrapper">
					<img class="question-img" src="@/assets/lp/question.png" alt="question">
				</div>
			</div>
			<div class="center-area">
				<div class="question-card-wrapper">
					<template v-for="(card, idx) in cards">
						<QuestionCard
							:key="idx"
							:q="card.q"
							:a="card.a"
							:class="{'card-margin': idx >= 1}"
						/>
					</template>
				</div>
				<TrialButton :size="'large'" class="trial-button-component"/>
			</div>
			<div class="right-area">
				<div class="answer-img-wrapper">
					<img class="answer-img" src="@/assets/lp/answer.png" alt="answer">
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import SectionTitle from '@/components/LP/atoms/SectionTitle'
import QuestionCard from '@/components/LP/atoms/QuestionCard'
import TrialButton from '@/components/LP/atoms/TrialButton'
import LinkPoint from '@/components/LP/atoms/LinkPoint'

export default {
	name: 'Questions',
	components: {
		SectionTitle,
		QuestionCard,
		TrialButton,
		LinkPoint
	},
	data () {
    const cards = [
      {
				q: '初期導入費、ランニングコストはどれくらいかかりますか？',
				a: '初期導入費は一切ありません。ランニングコストはプランにより異なります。すぐにお試しいただける無料プランからご用意しております。'
      },
      {
				q: '契約期間はどれくらいですか。',
				a: '半年からになります。１社様、１回限りでございますが、無料トライアル期間がございます。そちらから申し込むと、通常よりアップグレードしたプランでお申込み頂けます。'
      },
      {
				q: '私、PC操作に自信がないのですが…',
				a: '簡単に使える事ができます。パソコン操作歴が浅い方でもご利用頂いております。導入までのサポートもございますので、ぜひ一度ご相談くださいませ。'
	  },
	  {
				q: 'チャットボットですか？',
				a: '「見た目」は似てますが、機能は全く異なります。チャットだけではなくメールを送ったり、データを集計したり、日程調整したり、様々な部品を取り揃えています。'
	  },
	  {
				q: 'ロボは若い方しか使わないのではないでしょうか？',
				a: '幅広い年代の方に、ロボお使いいただけている状況でございます。ロボと親和性の高いスマホを使って情報を集めたりする方が大半になっているかと思います。'
	  },
	  {
				q: 'どんな会社が使われていますか？',
				a: '人力でやっている調整、事務、管理業務など、パソコンをお使いの企業様も、パソコンを使ってらっしゃらない企業様も、人手不足でお困りの会社様向けにお使い頂けます。'
      },
    ]
		return {
      cards
		}
	}
}
</script>

<style lang="scss" scoped>
.questions-container {
	background-color: #F9F8FB;
	padding-bottom: 80px;
}
.area-container {
	display: flex;
	justify-content: space-evenly;
	width: 95%;
	margin: auto;
}
.left-area, .right-area {
	display: flex;
	align-items: flex-end;
}
.card-margin {
	margin-top: 24px !important;
}
.trial-button-component {
	margin-top: 120px;
	text-align: center;
}
.question-img-wrapper, .answer-img-wrapper {
	max-width: 240px;
	width: 100%;
}
.question-img, .answer-img {
	width: 100%;
}
@media screen and (max-width: 896px) {
	.left-area {
		display: none;
	}
	.right-area {
		display: none;
	}
	.trial-button-component {
		margin-top: 80px;
	}
}
</style>