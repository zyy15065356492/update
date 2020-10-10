<template>
  <div class="application-fields">
    <ApplicationFieldItem
      v-for="(infoItem,index) in fieldList"
      :app-field-item-info="infoItem"
      :key="'field-'+index"
      v-on:selected-field="selectFieldListener"
    ></ApplicationFieldItem>
  </div>
</template>
<script lang="ts">
import { Vue, Prop, Component, Emit } from "vue-property-decorator";
import InfoItem from "@/interfaces/info-item";
import ApplicationFieldItem from "@/components/home-body/application-field-item.vue";
@Component({
  components: {
    ApplicationFieldItem,
  },
})
export default class ApplicationFields extends Vue {
  @Prop({
    type: Array,
  })
  private fieldList!: Array<InfoItem>;
  @Emit("selected-field")
  selectFieldListener(selectedField: InfoItem) {
    console.log("selectedField", selectedField);
  }
}
</script>
<style lang="less" scoped>
.application-fields {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
}
</style>