<template>
	<section class="implementation-steps-container main-section">
    <LinkPoint :destination="'implementation-steps'"/>
		<SectionTitle>
			<h3 class="section-title">お問い合わせから導入まで<span class="emphasis"><br>5ステップ</span>だけで完了！</h3>
		</SectionTitle>
    <div class="card-container">
      <template v-for="(card, idx) in cards">
        <StepCard
          :key="`first-${idx}`"
          :idx="idx"
          :img="card.img"
          :alt="card.alt"
          :description="card.description"
        />
        <StepArrow
          v-if="idx < 4"
          :key="`second-${idx}`"
        />
      </template>
    </div>
	</section>
</template>

<script>
import SectionTitle from '@/components/LP/atoms/SectionTitle'
import StepCard from '@/components/LP/atoms/StepCard'
import StepArrow from '@/components/LP/atoms/StepArrow'
import LinkPoint from '@/components/LP/atoms/LinkPoint'

export default {
	name: 'ImplementationSteps',
	components: {
    SectionTitle,
    StepCard,
    StepArrow,
    LinkPoint
	},
	data () {
    const cards = [
      {
				img: require('@/assets/lp/step1.png'),
				description: 'サービス内容確認'
      },
      {
				img: require('@/assets/lp/step2.png'),
				description: 'お客様情報入力<br>（3分程度）'
      },
      {
				img: require('@/assets/lp/step3.png'),
				description: 'トライアル開始<br>（14日間）'
      },
      {
				img: require('@/assets/lp/step4.png'),
				description: 'プラン選択'
      },
      {
				img: require('@/assets/lp/step5.png'),
				description: '本契約開始'
      },
    ]
		return {
      cards
		}
	}
}
</script>

<style lang="scss" scoped>
.implementation-steps-container {
  background-color: #F5E6FE;
  padding-bottom: 80px;
}
.card-container {
  width: 95%;
	margin: auto;
	display: flex;
	justify-content: center;
}
.section-title {
  br {
    display: none;
  }
}
@media screen and (max-width: 896px) {
  .card-container {
    display: block;
  }
}
@media screen and (max-width: 480px) {
  .section-title {
    br {
      display: block;
    }
  }
}
</style>