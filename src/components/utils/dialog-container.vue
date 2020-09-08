<template>
  <transition :id="dialogId" name="dia" mode="out-in">
    <div class="dialog-bg position-absolute">
      <div
        v-bind:style="{left:dialogSize.x+'%',right:dialogSize.x+'%',top:dialogSize.y+'%',bottom:dialogSize.y+'%'}"
        class="dialog-container px-4 py-2 d-flex flex-column position-absolute"
      >
        <div class="dia-close-icon position-absolute" v-on:click="emitClose"></div>
        <div class="dia-title">{{dialogTitle}}</div>
        <div class="position-relative dia-content none-height flex-grow-1 d-flex flex-column">
          <slot v-on:closeDialog="emitClose"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script lang="ts">
import { Vue, Prop, Emit } from "vue-property-decorator";

export default class DialogContainer extends Vue {
  @Prop() private readonly dialogId!: string;
  @Prop() private readonly dialogTile!: string;
  @Prop({
    default: () => {
      return {
        x: 10,
        y: 10,
      };
    },
  })
  private readonly dialogSize!: any;

  @Emit("closeDialog")
  emitClose() {
    console.log();
  }
}
</script>
<style lang="less" scoped>
.dialog-bg {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
  min-width: 400px;
  min-height: 220px;
}
.dialog-container {
  z-index: 999;
  box-shadow: 5px 5px 10px rgba(233, 233, 233, 0.2);
  border-radius: 1rem;
  background-color: #222a8f;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.dia-close-icon {
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  right: -0.5rem;
  top: -0.5rem;
  background-image: url(../../assets/images/close-btn.png);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
.dia-title {
  font-size: 1.6rem;
  color: white;
}
.dia-content {
  margin: 1rem 0;
}
</style>

