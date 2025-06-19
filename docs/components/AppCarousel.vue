<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import emblaCarouselVue from 'embla-carousel-vue'

interface Slide {
  img: string
  alt: string
  description: string
  link: string
}

const slides: Slide[] = [
  {
    img: '/assets/new_ui.png',
    alt: 'NEW-UI',
    description: '新的UI',
    link: ''
  },
  {
    img: '/assets/more_settings.png',
    alt: 'More-Setting',
    description: '更多的设置',
    link: ''
  },
  {
    img: '/assets/gradle_file.png',
    alt: 'Gradle-Parser',
    description: '新的Gradle解析器',
    link: '/docs/help/gradle-parser'
  },
  {
    img: '/assets/code.png',
    alt: 'Java-Code',
    description: '新版本Java的支持',
    link: ''
  }
]

const [emblaRef, emblaApi] = emblaCarouselVue({ loop: true, skipSnaps: true })
const currentSlide = ref(0)
let autoplayTimer: ReturnType<typeof setInterval> | null = null

const scrollTo = (index: number) => {
  emblaApi.value?.scrollTo(index)
}

const scrollPrev = () => {
  emblaApi.value?.scrollPrev()
}

const scrollNext = () => {
  emblaApi.value?.scrollNext()
}

const setupAutoplay = () => {
  autoplayTimer = setInterval(() => {
    emblaApi.value?.scrollNext()
  }, 5000)
}

const clearAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

const goToIntro = (link: string) => {
  if (link) {
    window.location.href = link // 直接打开
    //window.open(link, '_blank') // 如需新窗口打开
  }
  
}

onMounted(() => {
  if (!emblaApi.value) return

  emblaApi.value.on('select', () => {
    currentSlide.value = emblaApi.value?.selectedScrollSnap() || 0
  })

  setupAutoplay()
})

onUnmounted(() => {
  clearAutoplay()
})
</script>

<template>
  <div class="carousel-container">
    <div class="embla" ref="emblaRef">
      <div class="embla__container">
        <div v-for="(slide, index) in slides" :key="index" class="embla__slide">
          <div class="slide-content" @click="goToIntro(slide.link)">
            <img :src="slide.img" :alt="slide.alt" />
            <p>{{ slide.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <button class="embla__prev" @click="scrollPrev" aria-label="上一张">&#10094;</button>
    <button class="embla__next" @click="scrollNext" aria-label="下一张">&#10095;</button>

    <div class="embla__dots">
      <button
        v-for="(_, index) in slides"
        :key="index"
        :class="['embla__dot', { 'is-selected': index === currentSlide }]"
        @click="scrollTo(index)"
        :aria-label="`跳转到第${index + 1}张`"
      ></button>
    </div>
  </div>
</template>

<style scoped>
.carousel-container {
  position: relative;
  margin: 30px auto;
  overflow: hidden;
}

.embla {
  overflow: hidden;
}

.embla__container {
  display: flex;
}

.embla__slide {
  flex: 0 0 100%;
  min-width: 0;
}

.slide-content {
  text-align: center;
  padding-bottom: 40px;
  cursor: pointer; /* 新增：提示可点击 */
  transition: box-shadow 0.2s;
}
.slide-content:hover {
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
}

.slide-content img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.slide-content p {
  margin: 10px 0;
  font-weight: bold;
  font-size: 1.2em;
}

@media (min-width: 769px) {
  .embla__slide {
    flex: 0 0 25%;
  }
  .slide-content {
    padding: 0 10px 40px;
  }
}

.embla__prev,
.embla__next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.5);
  color: #333;
  border: none;
  cursor: pointer;
  padding: 15px;
  border-radius: 50%;
  font-size: 18px;
  transition: background-color 0.3s;
  z-index: 2;
}

.embla__prev:hover,
.embla__next:hover {
  background-color: rgba(255, 255, 255, 0.8);
}

.embla__prev {
  left: 10px;
}

.embla__next {
  right: 10px;
}

.embla__dots {
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
}

.embla__dot {
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.embla__dot.is-selected {
  background-color: white;
}

@media (max-width: 768px) {
  .embla__prev,
  .embla__next {
    padding: 10px;
    font-size: 14px;
  }
  .slide-content p {
    font-size: 1em;
  }
}
</style>