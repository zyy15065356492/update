<template>
  <!-- 评分展示 -->
  <div class="grade" id="ti">
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      img: require("../../assets/images/grade/good.png"),
      //动态改变值
    };
  },
  props: { gradenum1: Number },
  //gradenum改变同时改变grade背景图片
  mounted() {
    // console.log(this.gradenum1)
    if (this.gradenum1 >= 80) {
      document.getElementById("ti").innerHTML = `<hgroup class="percentage-pie" style="width:500px">
            <svg width="40rem" height="48.571428rem" version="1.1" xmlns="http://www.w3.org/2000/svg">
                
                <g id="wave">
                    
                    <path id="wave-2" fill="rgba(113,155,253, .8)" d="M140 52 C200 86, 340 12, 361 52 A185 185 0 1 1 140 52 L250 52 Z;">
                        
                        <animate dur="2s" repeatCount="indefinite" attributeName="d" attributeType="XML" values="
                                
                                
                                M140 52 C200 12, 340 86, 361 52 A185 185 0 1 1 140 52 L250 52 Z;
                                M140 52 C170 42, 300 66, 361 52 A185 185 0 1 1 140 52 L250 52 Z;
                                M140 52 C200 86, 340 12, 361 52 A185 185 0 1 1 140 52 L250 52 Z;
                                M140 52 C170 66, 300 42, 361 52 A185 185 0 1 1 140 52 L250 52 Z;
                                M140 52 C200 12, 340 86, 361 52 A185 185 0 1 1 140 52 L250 52 Z"></animate>
                    </path>
                    <path id="wave-3" fill="rgba(113,155,253, .5)"
                        d="M65 200 C100 220, 400 180, 435 200 A180 180 0 0 1 65 200 Z;">
                        <animate dur="3s" repeatCount="indefinite" attributeName="d" attributeType="XML" values="
                                M140 52 C250 1, 300 96, 361 52 A185 185 0 1 1 140 52 L250 52 Z;
                                M140 52 C190 32, 290 56, 361 52 A185 185 0 1 1 140 52 L250 52 Z;
                                M140 52 C250 96, 300 1, 361 52 A185 185 0 1 1 140 52 L250 52 Z;
                                M140 52 C190 56, 290 32, 361 52 A185 185 0 1 1 140 52 L250 52 Z;
                                M140 52 C250 1, 300 96, 361 52 A185 185 0 1 1 140 52 L250 52 Z"></animate>
                    </path>

                </g>
                <defs>
    <filter id="f1" x="0" y="0" width="200%" height="200%">
      <feOffset result="offOut" in="SourceAlpha" dx="20" dy="20" />
      <feGaussianBlur result="blurOut" in="offOut" stdDeviation="15" />
      <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
    </filter>
  </defs>
                    <ellipse cx="240" cy="430" rx="150" ry="20" style="fill:rgba(239,239,224,0.1);" filter="url(#f1)" />
                <circle cx="250" cy="200" r="185" stroke-width="13" stroke="white" fill="transparent"></circle>
                <circle cx="250" cy="200" r="190" stroke-width="2" stroke="#719bfd" fill="none"
                    class="percentage-pie-svg"></circle>
                <circle cx="40" cy="270" r="10"  fill="#719bfd" class="percentage-pie-svg"></circle>
                <circle cx="38" cy="170" r="7"  fill="#719bfd" class="percentage-pie-svg"></circle>
                <circle cx="30" cy="110" r="3"  fill="#719bfd" class="percentage-pie-svg"></circle>
                <circle cx="445" cy="120" r="7"  fill="#719bfd" class="percentage-pie-svg"></circle>
                <circle cx="400" cy="60" r="3"  fill="#719bfd" class="percentage-pie-svg"></circle>


            </svg>
        </hgroup>`;
    }
    if (this.gradenum1 >= 60 && this.gradenum1 <= 79) {
      document.getElementById("ti").innerHTML = `<hgroup class="percentage-pie" style="width:500px">
            <svg width="40rem" height="48.571428rem" version="1.1" xmlns="http://www.w3.org/2000/svg">
                
                <g id="wave">
                    
                    <path id="wave-2" fill="rgba(252,126,41, .8)" d="M79 130 C170 210, 290 140, 421 130 A185 185 0 1 1 79 130 L250 130 L;">
                        
                        <animate dur="2s" repeatCount="indefinite" attributeName="d" attributeType="XML" values="
                                
                                
                                M79 130 C150 90, 320 230, 421 130 A185 185 0 1 1 79 130 L250 130 L;
                                M79 130 C170 140, 290 210, 421 130 A185 185 0 1 1 79 130 L250 130 L;
                                M79 130 C150 250, 320 100, 421 130 A185 185 0 1 1 79 130 L250 130 L;
                                M79 130 C170 210, 290 140, 421 130 A185 185 0 1 1 79 130 L250 130 L;
                                M79 130 C150 90, 320 230, 421 130 A185 185 0 1 1 79 130 L250 130 L"></animate>
                    </path>
                    <path id="wave-3" fill="rgba(252,126,41, .5)"
                        d="M79 130 C180 100, 300 210, 421 130 A185 185 0 1 1 79 130 L250 130 L;">
                        <animate dur="3s" repeatCount="indefinite" attributeName="d" attributeType="XML" values="
                               M79 130 C160 85, 310 230, 421 130 A185 185 0 1 1 79 130 L250 130 L;
                                M79 130 C150 100, 320 210, 421 130 A185 185 0 1 1 79 130 L250 130 L;
                                M79 130 C160 230, 310 85, 421 130 A185 185 0 1 1 79 130 L250 130 L;
                               M79 130 C140 210, 320 100, 421 130 A185 185 0 1 1 79 130 L250 130 L;
                                M79 130 C160 85, 310 230, 421 130 A185 185 0 1 1 79 130 L250 130 L"></animate>
                    </path>

                </g>
                <circle cx="250" cy="200" r="185" stroke-width="13" stroke="white" fill="transparent"></circle>
                <circle cx="250" cy="200" r="190" stroke-width="2" stroke="#fc7e29" fill="none"
                    class="percentage-pie-svg"></circle>
                    <defs>
    <filter id="f1" x="0" y="0" width="200%" height="200%">
      <feOffset result="offOut" in="SourceAlpha" dx="20" dy="20" />
      <feGaussianBlur result="blurOut" in="offOut" stdDeviation="15" />
      <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
    </filter>
  </defs>
                    <ellipse cx="240" cy="430" rx="150" ry="20" style="fill:rgba(239,239,224,0.1);" filter="url(#f1)" />
                <circle cx="40" cy="270" r="10"  fill="#fc7e29" class="percentage-pie-svg"></circle>
                <circle cx="38" cy="170" r="7"  fill="#fc7e29" class="percentage-pie-svg"></circle>
                <circle cx="30" cy="110" r="3"  fill="#fc7e29" class="percentage-pie-svg"></circle>
                <circle cx="445" cy="120" r="7"  fill="#fc7e29" class="percentage-pie-svg"></circle>
                <circle cx="400" cy="60" r="3"  fill="#fc7e29" class="percentage-pie-svg"></circle>


            </svg>
        </hgroup>`;
    }
    if (this.gradenum1 <= 59 && this.gradenum1 >= 40) {
      document.getElementById("ti").innerHTML = `<hgroup class="percentage-pie" style="width:500px">
            <svg width="40rem" height="48.571428rem" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <!-- <text class="liquidFillGaugeText" text-anchor="middle" font-size="42px" transform="translate(100,120)"
                    style="fill: #000">50.0%</text> -->
                <!-- Wave -->
                <g id="wave">
                    <path id="wave-2" fill="rgba(255,63,41, .8)"
                        d="M65 200 C100 220, 400 180, 435 200 A185 185 0 0 1 65 200 Z;">
                        <animate dur="2s" repeatCount="indefinite" attributeName="d" attributeType="XML" values="
                                M65 200 C130 110, 360 250, 435 200 A185 185 0 0 1 65 200 Z;
                                M65 200 C100 180, 400 220, 435 200 A185 185 0 0 1 65 200 Z;
                                M65 200 C130 250, 360 110, 435 200 A185 185 0 0 1 65 200 Z;
                                M65 200 C100 220, 400 180, 435 200 A185 185 0 0 1 65 200 Z;
                                M65 200 C130 110, 360 250, 435 200 A185 185 0 0 1 65 200 Z"></animate>
                    </path>
                    <path id="wave-3" fill="rgba(255,63,41, .5)"
                        d="M65 200 C100 220, 400 180, 435 200 A185 185 0 0 1 65 200 Z;">
                        <animate dur="3s" repeatCount="indefinite" attributeName="d" attributeType="XML" values="
                                M65 200 C180 90, 320 230, 435 200 A185 185 0 0 1 65 200 Z;
                                M65 200 C110 170, 400 210, 435 200 A185 185 0 0 1 65 200 Z;
                                M65 200 C180 230, 320 90, 435 200 A185 185 0 0 1 65 200 Z;
                                M65 200 C110 210, 400 170, 435 200 A185 185 0 0 1 65 200 Z;
                                M65 200 C180 90, 320 230, 435 200 A185 185 0 0 1 65 200 Z"></animate>
                    </path>

                </g>
                <defs>
    <filter id="f1" x="0" y="0" width="200%" height="200%">
      <feOffset result="offOut" in="SourceAlpha" dx="20" dy="20" />
      <feGaussianBlur result="blurOut" in="offOut" stdDeviation="15" />
      <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
    </filter>
  </defs>
                    <ellipse cx="240" cy="430" rx="150" ry="20" style="fill:rgba(239,239,224,0.1);" filter="url(#f1)" />
                <circle cx="250" cy="200" r="185" stroke-width="13" stroke="white" fill="transparent"></circle>
                <circle cx="250" cy="200" r="190" stroke-width="2" stroke="#ff3f29" fill="none"
                    class="percentage-pie-svg"></circle>
                <circle cx="40" cy="270" r="10"  fill="#ff3f29" class="percentage-pie-svg"></circle>
                <circle cx="38" cy="170" r="7"  fill="#ff3f29" class="percentage-pie-svg"></circle>
                <circle cx="30" cy="110" r="3"  fill="#ff3f29" class="percentage-pie-svg"></circle>
                <circle cx="445" cy="120" r="7"  fill="#ff3f29" class="percentage-pie-svg"></circle>
                <circle cx="400" cy="60" r="3"  fill="#ff3f29" class="percentage-pie-svg"></circle>
            </svg>
        </hgroup>`;
    }
    if (this.gradenum1 >= 20 && this.gradenum1 <= 39) {
      document.getElementById(
        "ti"
      ).innerHTML = ` <hgroup class="percentage-pie" style="width:500px">
            <svg width="40rem" height="48.571428rem" version="1.1" xmlns="http://www.w3.org/2000/svg">
                
                <g id="wave">
                    
                    <path id="wave-2" fill="rgba(255,63,41, .8)" d="M102 310 C120 290, 360 310, 398 310 A185 185 0 0 1 102 310 L250 310 L;">
                        
                        <animate dur="2s" repeatCount="indefinite" attributeName="d" attributeType="XML" values="
                                
                                
                                M102 310 C140 240, 300 310, 398 310 A185 185 0 0 1 102 310 L250 310 L;
                                M102 310 C120 290, 360 310, 398 310 A185 185 0 0 1 102 310 L250 310 L;
                               M102 310 C140 310, 300 240, 398 310 A185 185 0 0 1 102 310 L250 310 L;
                                 M102 310 C120 310, 360 290, 398 310 A185 185 0 0 1 102 310 L250 310 L;
                               M102 310 C140 240, 300 310, 398 310 A185 185 0 0 1 102 310 L250 310 L"></animate>
                    </path>
                    <path id="wave-3" fill="rgba(255,63,41, .5)"
                        d="M102 310 C170 240, 270 290, 398 310 A185 185 0 0 1 102 310 L250 310 L;">
                        <animate dur="3s" repeatCount="indefinite" attributeName="d" attributeType="XML" values="
                               M102 310 C160 220, 280 300, 398 310 A185 185 0 0 1 102 310 L250 310 L;
                               M102 310 C170 260, 270 290, 398 310 A185 185 0 0 1 102 310 L250 310 L;
                                M102 310 C160 300, 280 220, 398 310 A185 185 0 0 1 102 310 L250 310 L;
                                M102 310 C170 290, 270 260, 398 310 A185 185 0 0 1 102 310 L250 310 L;
                                M102 310 C160 220, 280 300, 398 310 A185 185 0 0 1 102 310 L250 310 L"></animate>
                    </path>

                </g>
                <defs>
    <filter id="f1" x="0" y="0" width="200%" height="200%">
      <feOffset result="offOut" in="SourceAlpha" dx="20" dy="20" />
      <feGaussianBlur result="blurOut" in="offOut" stdDeviation="15" />
      <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
    </filter>
  </defs>
                    <ellipse cx="240" cy="430" rx="150" ry="20" style="fill:rgba(239,239,224,0.1);" filter="url(#f1)" />
                <circle cx="250" cy="200" r="185" stroke-width="13" stroke="white" fill="transparent"></circle>
                <circle cx="250" cy="200" r="190" stroke-width="2" stroke="#ff3f29" fill="none"
                    class="percentage-pie-svg"></circle>
                <circle cx="40" cy="270" r="10"  fill="#ff3f29" class="percentage-pie-svg"></circle>
                <circle cx="38" cy="170" r="7"  fill="#ff3f29" class="percentage-pie-svg"></circle>
                <circle cx="30" cy="110" r="3"  fill="#ff3f29" class="percentage-pie-svg"></circle>
                <circle cx="445" cy="120" r="7"  fill="#ff3f29" class="percentage-pie-svg"></circle>
                <circle cx="400" cy="60" r="3"  fill="#ff3f29" class="percentage-pie-svg"></circle>


            </svg>
        </hgroup>`;
    }
    if (this.gradenum1 < 20) {
      document.getElementById("ti").innerHTML = `<hgroup class="percentage-pie" style="width:500px">
            <svg width="40rem" height="48.571428rem" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <!-- <text class="liquidFillGaugeText" text-anchor="middle" font-size="42px" transform="translate(100,120)"
                    style="fill: #000">50.0%</text> -->
                <!-- Wave -->
                <g id="wave">
                    <path id="wave-2" fill="rgba(255,63,41, .8)"
                        d="M177 400 C180 350, 300 385, 323 400 A185 185 0 0 1 177 400 Z;">
                        <animate dur="3s" repeatCount="indefinite" attributeName="d" attributeType="XML" values="
                                M177 400 C190 310, 290 380, 323 400 A185 185 0 0 1 177 400 Z;
                                M177 400 C180 350, 300 385, 323 400 A185 185 0 0 1 177 400 Z;
                                 M177 400 C190 400, 290 320, 323 400 A185 185 0 0 1 177 400 Z;
                                M177 400 C180 385, 300 350, 323 400 A185 185 0 0 1 177 400 Z;
                                M177 400 C190 310, 290 380, 323 400 A185 185 0 0 1 177 400 Z"></animate>
                    </path>
                    <path id="wave-3" fill="rgba(255,63,41, .5)"
                        d="M177 400 C200 400, 280 310, 323 400 A185 185 0 0 1 177 400 Z;">
                        <animate dur="3s" repeatCount="indefinite" attributeName="d" attributeType="XML" values="
                                M177 400 C200 300, 280 380, 323 400 A185 185 0 0 1 177 400 Z;
                                M177 400 C210 330, 270 400, 323 400 A185 185 0 0 1 177 400 Z;
                                 M177 400 C200 400, 280 320, 323 400 A185 185 0 0 1 177 400 Z;
                                M177 400 C210 400, 290 330, 323 400 A185 185 0 0 1 177 400 Z;
                                M177 400 C200 300, 280 380, 323 400 A185 185 0 0 1 177 400 Z"></animate>
                    </path>

                </g>
                <defs>
    <filter id="f1" x="0" y="0" width="200%" height="200%">
      <feOffset result="offOut" in="SourceAlpha" dx="20" dy="20" />
      <feGaussianBlur result="blurOut" in="offOut" stdDeviation="15" />
      <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
    </filter>
  </defs>
                    <ellipse cx="240" cy="430" rx="150" ry="20" style="fill:rgba(239,239,224,0.1);" filter="url(#f1)" />
                <circle cx="250" cy="200" r="185" stroke-width="13" stroke="white" fill="transparent"></circle>
                <circle cx="250" cy="200" r="190" stroke-width="2" stroke="#ff3f29" fill="none"
                    class="percentage-pie-svg"></circle>
                <circle cx="40" cy="270" r="10"  fill="#ff3f29" class="percentage-pie-svg"></circle>
                <circle cx="38" cy="170" r="7"  fill="#ff3f29" class="percentage-pie-svg"></circle>
                <circle cx="30" cy="110" r="3"  fill="#ff3f29" class="percentage-pie-svg"></circle>
                <circle cx="445" cy="120" r="7"  fill="#ff3f29" class="percentage-pie-svg"></circle>
                <circle cx="400" cy="60" r="3"  fill="#ff3f29" class="percentage-pie-svg"></circle>
            </svg>
        </hgroup>`;
    }
    // console.log(this.grade)
  },
  methods: {},
};
</script>
<style scoped>
.percentage-pie {
  color: aliceblue;
  width: 464px;
  height: 464px;
}
.zi {
  margin-left: -20rem;
}
/* .grade {
  margin-top: 15%;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
} */
</style>
