<template>
  <div>
    <div class="navigation-wrapper">
      <div ref="container" class="keen-slider">
        <div
          class="keen-slider__slide image_slide"
          v-for="image in propertyImages"
          :key="image"
        >
          <img class="w-full" :src="image.image" :alt="image.name" />
        </div>
      </div>
      <svg
        @click="slider.prev()"
        class="fill-sky-600 cursor-pointer hover:fill-gray-100"
        :class="{
          arrow: true,
          'arrow--left': true,
          'arrow--disabled': current === 0,
        }"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
        ></path>
      </svg>
      <svg
        v-if="slider"
        @click="slider.next()"
        class="fill-sky-600 cursor-pointer hover:fill-gray-100"
        :class="{
          arrow: true,
          'arrow--right': true,
          'arrow--disabled': current === slider.track.details.slides.length - 1,
        }"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>
      </svg>
    </div>
    <div v-if="slider" class="dots">
      <button
        v-for="(_slide, idx) in dotHelper"
        @click="slider.moveToIdx(idx)"
        :class="{ dot: true, active: current === idx }"
        :key="idx"
      ></button>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useKeenSlider } from "keen-slider/vue.es";
import "keen-slider/keen-slider.min.css";
export default {
  name: "Slider",
  props: {
    propertyImages: Object,
  },
  setup() {
    const current = ref(1);
    const [container, slider] = useKeenSlider(
      {
        loop: true,
        initial: current.value,
        slideChanged: (s) => {
          current.value = s.track.details.rel;
        },
      },
      [
        (slider) => {
          let timeout;
          let mouseOver = false;
          function clearNextTimeout() {
            clearTimeout(timeout);
          }
          function nextTimeout() {
            clearTimeout(timeout);
            if (mouseOver) return;
            timeout = setTimeout(() => {
              slider.next();
            }, 3000);
          }
          slider.on("created", () => {
            slider.container.addEventListener("mouseover", () => {
              mouseOver = true;
              clearNextTimeout();
            });
            slider.container.addEventListener("mouseout", () => {
              mouseOver = false;
              nextTimeout();
            });
            nextTimeout();
          });
          slider.on("dragStarted", clearNextTimeout);
          slider.on("animationEnded", nextTimeout);
          slider.on("updated", nextTimeout);
        },
      ]
    );

    const dotHelper = computed(() =>
      slider.value
        ? [...Array(slider.value.track.details.slides.length).keys()]
        : []
    );
    console.log(slider);
    return { container, current, dotHelper, slider };
    //return { container }
  },
};
</script>

<style scoped>
.image_slide {
  display: flex;
  align-items: center;
  justify-content: center;
  
}

.navigation-wrapper {
  position: relative;
}
.dots {
  display: flex;
  padding: 10px 0;
  justify-content: center;
}
.dot {
  border: none;
  width: 25px;
  height: 1.5px;
  background: #07598586;
  margin: -35px 3px;
  padding: 1.5px;
  cursor: pointer;
  z-index: 20;
}
.dot:focus {
  outline: none;
}
.dot.active {
  background: rgb(255, 255, 255);
}
.arrow {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
}

.arrow--left {
  left: 5px;
}
.arrow--right {
  left: auto;
  right: 5px;
}
.arrow--disabled {
  fill: rgba(39, 39, 39, 0.5);
}
</style>