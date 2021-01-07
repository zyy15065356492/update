<template>
  <div style="width: 60%">
    <el-select
      v-model="upResId"
      clearable
      placeholder="请选择"
      @clear="handleClear"
      ref="selectUpResId"
      @visible-change='treeshow'
    >
      <el-option hidden key="upResId" :value="upResId" :label="upResName">
      </el-option>
      <el-tree
        ref="tree"
        :data="data"
        show-checkbox
        default-expand-all
        node-key="resId"
        highlight-current
        :default-checked-keys="defaultarr"
        @check-change ="stateChange"
        :props="defaultProps"
      >
      </el-tree>
    </el-select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      aa: true,
      defaultarr:[1],
data: [
        {
          resId: 1,
          label: "一级 1",
          children: [
            {
              resId: 11,
              label: "二级 1-1",
              children: [
                {
                  resId: 111,
                  label: "三级 1-1-1",
                },
                {
                  resId: 112,
                  label: "三级 1-1-2",
                },
              ],
            },
            {
              resId: 12,
              label: "二级 1-2",
              children: [
                {
                  resId: 121,
                  label: "三级 1-2-1",
                },
                {
                  resId: 122,
                  label: "三级 1-2-2",
                },
              ],
            },
            {
              resId: 13,
              label: "二级 1-3",
              children: [
                {
                  resId: 131,
                  label: "三级 1-3-1",
                  children: [
                    {
                      resId: 1311,
                      label: "三级 1-3-1-1",
                    },
                    {
                      resId: 1312,
                      label: "三级 1-3-1-2",
                    },
                  ],
                },
                {
                  resId: 112,
                  label: "三级 1-1-2",
                },
              ],
            },
            {
              resId: 14,
              label: "二级 1-4",
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
      upResId: "",
      upid: [],
      upResName: "一级",
      upname: [],
      needValue:[],
    };
  },
  methods: {
    treeshow(showt){
       if(showt==true){
    this.defaultarr=[1]
       }
    },
    stateChange() {
      //先取消默认选中的
      this.defaultarr=[]
      //最后筛选出的数据

                this.needValue = []

                //先查出叶子节点
                const leafNodes =  this.$refs.tree.getCheckedNodes(true,false)
                //在查出全选节点和子节点
                const allCheckAndLeafNodes = this.$refs.tree.getCheckedNodes(false,false)
                //在查出半选节点、全选节点、子节点
                const allNodes = this.$refs.tree.getCheckedNodes(false,true)
                //筛选出全选节点(不包括叶子节点)
                const allCheckNodes = allCheckAndLeafNodes.filter(node=>!leafNodes.includes(node))
                //筛选出半选节点
                const halfNodes = allNodes.filter(node=>!allCheckAndLeafNodes.includes(node))
                
                //全选节点先处理为需要的节点，按理应该选最高或最低的节点
                // this.needValue = allCheckNodes 

                //全选节点中筛选需要的节点
                for (const searchNode of allCheckNodes) {
                    const isFind = this.searchRootNodes(allCheckNodes,searchNode)
                    if(!isFind){
                        this.needValue.push(searchNode)
                    }
                }

                this.searchLeafNodes(halfNodes,leafNodes)
                this.upname=[]
                this.upid=[]
                for(const item of this.needValue){
                  // console.log(item.label)
                  this.upname.push(item.label)
                  this.upid.push(item.resId)
                }

            },
            //递归调用筛选需要的叶子节点
            searchLeafNodes(halfNodes,leafNodes){
                for (const halfNode of halfNodes) {
                    //如果存在子子节点
                    if(!halfNode.children.children){
                        //查找子节点下是否存在某个叶子节点，如果存在就是需要的节点
                        halfNode.children.forEach(node=>{

                            if(leafNodes.includes(node)){
                                this.needValue.push(node)
                            }

                        })
                    }else{
                        //递归
                        this.searchLeafNodes(halfNode.children,leafNodes)
                    }
                    
                }
            },
            //递归调用判断全选节点中查找的节点是否为顶级节点
            searchRootNodes(allCheckNodes,searchNode){
                for (const allCheckNode of allCheckNodes) {
                    if(!allCheckNode.children.children){
                        if(allCheckNode.children.includes(searchNode)){
                            return true
                        }else{
                            continue
                        }
                    }else{
                        return this.searchRootNodes(allCheckNodes)
                    }
                    
                }
    },
    handleClear() {
      // 将选择器的值置空
      this.upResName = "";
      this.upResId = "";
    },
    //   loadNode(node, resolve) {
    //     if (node.level === 0) {
    //       return resolve([{ name: 'region' }]);
    //     }
    //     if (node.level > 1) return resolve([]);

    //     setTimeout(() => {
    //       const data = [{
    //         name: 'leaf',
    //         leaf: true
    //       }, {
    //         name: 'zone'
    //       }];

    //       resolve(data);
    //     }, 500);
    //   }
  },
  watch: {
    upname: function () {
      // console.log(this.upname)

      this.upResName = String(this.upname);
    },

    upid: function () {
      this.upResId = String(this.upid);
    },
  },
};
</script>
<style scoped>
</style>