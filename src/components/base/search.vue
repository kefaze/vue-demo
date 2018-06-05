<template>
    <div class="search_container">
        <input type="text" class="search_input" v-model="str">
        {{str}}
        <button @click="isShowList" class="search_btn">搜索</button>
        <div class="search_list_box" v-show="showList">
            <div class="search_list_items">
                <div @click="changeNetType(0)" style="border-right: 1px solid black">站点</div>
                <div @click="changeNetType(1)" style="border-right: 1px solid black">网元</div>
                <div @click="changeNetType(2)">链路</div>
            </div>
            <ul class="search_list" v-for="(item,index) in searchList[nowIndex]" :key="index">
                <li class="list_item" v-for="(val,index) in item" :key="index">{{val}}</li>
            </ul>
        </div>

    </div>
</template>

<script>
import { eventBus } from "../../eventBus";
export default {
    props: {},
    data() {
        return {
            str: "",
            nowIndex: 0,
            showList: false,
            searchLists: {
                netEle: ["网元1", "网元2", "网元3"],
                siteEle: ["站点1", "站点2", "站点3"],
                lineEle: ["链路1", "链路2", "链路3"]
            },
            searchList: [
                {
                    netEle: ["n111", "n222", "n333"]
                },
                {
                    siteEle: ["s111", "s222", "s333"]
                },
                {
                    lineEle: ["l111", "l222", "l333"]
                }
            ]
        };
    },
    watch: {
        str() {
            var _this = this;
            for (var i = 0; i < this.searchList.length; i++) {
                // for (var j = 0; j < this.search[i].length; j++) {
                //     if (this.search[i][j].indexOf(this.str) < 0) {
                //         delete this.search[i][j]
                //     }
                // }
                //console.log(Object.values(this.searchList[i]));
                Object.values(this.searchList[i]).forEach(function(val, index) {
                    //console.log(val);
                     for (var j = 0; j < val.length; j++) {
                        if (val.indexOf(_this.str) < 0) {
                            val.splice(j,1);
                        }
                    }
                    console.log(val);
                    // val.forEach(function(items, index) {
                    //     console.log(items)
                    //     if (items.indexOf(_this.str) < 0) {
                    //         //items.splice(index);
                    //     }
                    // });
                });
            }
        }
    },
    methods: {
        changeNetType(idx) {
            this.nowIndex = idx;

            this.showList = true;
        },
        isShowList(event) {
            event.stopPropagation();
            if (this.str !== "") {
                // eventBus.$emit("reset-component");
                this.showList = !this.showList;
                console.log(this.showList);
            }
        }
    },
    mounted() {
        eventBus.$on("reset-component", () => {
            //this.showList = false;
        });
    }
};
</script>

<style scoped>
.search_container {
    position: relative;
}
.search_input {
    width: 300px;
    height: 40px;
    border: 1px solid #ccc;
}
.search_btn {
    height: 40px;
    line-height: 40px;
    width: 80px;
}
.search_list_box {
    width: 300px;
    /* //height:200px; */
    border: 1px solid #dddddd;
    background: #ccc;
    position: absolute;
    top: 43px;
    z-index: 90;
}
.search_list_items {
    display: flex;
    justify-content: center;
}
.search_list_items div {
    width: 100px;
    height: 40px;
    color: #fff;
    background-color: blueviolet;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
}
.search_list {
    width: 100%;
    height: 400px;
}
.list_item {
    width: 100%;
    height: 30px;
    line-height: 30px;
    color: green;
}
</style>
