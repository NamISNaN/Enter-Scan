<template>
    <div>
    <div data-v-4cf483f6="" data-v-66e2be28="" class="index main-view">
        <section data-v-4cf483f6="" class="result big-size"><p data-v-4cf483f6="">
            出校备案编号：{{userData.markCode}}
        </p>
            <p v-if="leaveSchoolFlag&&!inSchool" data-v-4cf483f6=""><span data-v-4cf483f6="" >状态：</span><span data-v-4cf483f6="" class="bgc-blue" >已离校(当日返校)</span></p>
            <p v-if="!leaveSchoolFlag&&!inSchool" data-v-4cf483f6=""><span data-v-4cf483f6="">状态：</span><span data-v-4cf483f6=""  class="bgc-yellow">已返校(当日返校)</span></p>
            <p v-if="!leaveSchoolFlag&&inSchool" data-v-4cf483f6=""><span data-v-4cf483f6="">状态：</span><span data-v-4cf483f6=""  class="bgc-blue">已离校(当日返校)</span></p>
            <p v-if="leaveSchoolFlag&&inSchool" data-v-4cf483f6=""><span data-v-4cf483f6="" >状态：</span><span data-v-4cf483f6="" class="bgc-green" >当日返校已备案</span></p>

            <p data-v-4cf483f6=""><span data-v-4cf483f6="">出校日期：</span><span data-v-4cf483f6="">{{date|formatDateByDays(this)}}</span></p>
            <p data-v-4cf483f6=""><span data-v-4cf483f6="">当前时间：</span>
                <span data-v-4cf483f6="" style="color: rgb(255, 0, 0); font-size: 0.64rem; font-weight: bold;" @click="tagNumChange">
                {{date|formatDate(this)}}
            </span></p>
            <p data-v-4cf483f6=""><span data-v-4cf483f6="">出校起始时间：{{date|formatDateByDays(this)}}</span><span data-v-4cf483f6=""><br>{{userData.leaveSchool}}</span></p>
            <p data-v-4cf483f6=""><span data-v-4cf483f6="">出校结束时间：{{date|formatDateByDays(this)}}</span><span data-v-4cf483f6=""><br>{{userData.returnSchool}}</span></p>
            <p data-v-4cf483f6=""><span data-v-4cf483f6="">提交时间：{{date|formatDateByDays(this)}}</span><span data-v-4cf483f6=""> {{userData.sendTime}}</span></p>
            <p data-v-4cf483f6=""><span data-v-4cf483f6="">姓名：{{userData.name}}</span><span data-v-4cf483f6=""></span></p>
            <p data-v-4cf483f6=""><span data-v-4cf483f6="">学号：{{userData.code}}</span><span data-v-4cf483f6=""></span></p>
            <p data-v-4cf483f6=""><span data-v-4cf483f6="">性别：</span><span data-v-4cf483f6="">{{userData.sex}}</span></p>
            <p data-v-4cf483f6=""><span data-v-4cf483f6="">学院：天津师范大学</span><span data-v-4cf483f6=""></span></p>
            <p data-v-4cf483f6=""><span data-v-4cf483f6="">专业：{{userData.discipline}}</span><span data-v-4cf483f6=""></span></p><!----><p
                    data-v-4cf483f6=""><span data-v-4cf483f6="">年级：</span><span data-v-4cf483f6=""></span></p>
            <p data-v-4cf483f6=""><span data-v-4cf483f6="">出校事由：{{userData.reason}}</span><span data-v-4cf483f6=""></span></p>
            </section>

        <section data-v-4cf483f6="" class="result"><p data-v-4cf483f6=""><span data-v-4cf483f6="">审核意见：{{userData.suggest}}</span><span
                data-v-4cf483f6=""></span></p>
            <p data-v-4cf483f6=""><span data-v-4cf483f6="">审核时间：{{date|formatDateByDays(this)}}</span><span data-v-4cf483f6=""> {{userData.sendTime}}</span></p>
            <p data-v-4cf483f6=""><span data-v-4cf483f6="">审核人姓名：{{userData.suggestName}}</span><span data-v-4cf483f6=""></span></p></section>
        <div data-v-4cf483f6="" class="btn-wrap">
            <div v-if="leaveSchoolFlag&&inSchool" data-v-4cf483f6="" class="btn bgc-blue" @click="leaveSchool">确定离校</div>
            <div v-if="leaveSchoolFlag&&!inSchool" data-v-4cf483f6="" class="btn bgc-blue" @click="leaveSchool">确定回校</div>

        </div>


    </div>
        <div style="margin-top: 1px">

        <el-dialog

                title="输入信息"
                :visible.sync="changeInfoFlag"
                width="90%"
                v-alterELDialogMarginTop="{marginTop:'5vh'}"
                :close-on-click-modal="false"
        >
<div style="max-height: 500px;overflow: auto;margin-top: -30px">

            <el-form ref="form" :model="userData" label-width="100px">
                <el-switch
                        v-model="inSchool"
                        active-text="离校扫码"
                        inactive-text="入校扫码"
                        style="margin-bottom: 30px"
                >
                </el-switch>
                <el-form-item label="出校备案编号">
                    <el-input v-model="userData.markCode"></el-input>
                </el-form-item>
                <el-form-item label="出校起始日期">
                    <el-input v-model="userData.leaveSchool"></el-input>
                </el-form-item>
                <el-form-item label="出校结束日期">
                    <el-input v-model="userData.returnSchool"></el-input>
                </el-form-item>
                <el-form-item label="提交日期">
                    <el-input v-model="userData.sendTime"></el-input>
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input v-model="userData.name"></el-input>
                </el-form-item>
                <el-form-item label="学号">
                    <el-input v-model="userData.code"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-input v-model="userData.sex"></el-input>
                </el-form-item>
                <el-form-item label="专业">
                    <el-input v-model="userData.discipline"></el-input>
                </el-form-item>
                <el-form-item label="出校事由">
                    <el-input v-model="userData.reason"></el-input>
                </el-form-item>
                <el-form-item label="返校日期">
                    <el-input v-model="userData.name"></el-input>
                </el-form-item>
                <el-form-item label="审核意见">
                    <el-input v-model="userData.suggest"></el-input>
                </el-form-item>
                <el-form-item label="审核人姓名">
                    <el-input v-model="userData.suggestName"></el-input>
                </el-form-item>
            </el-form>
</div>
            <span slot="footer" class="dialog-footer">
    <el-button size="mini" @click="changeInfoFlag = false">取 消</el-button>
    <el-button size="mini" type="primary" @click="changeInfoFlag = false">确 定</el-button>
  </span>
        </el-dialog>
        </div>
    </div>

</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import 'vant/lib/button/style';
  import Toast from 'vant/lib/toast';
  import vanField from 'vant/lib/field'
  import { Dialog } from 'vant';
  import fa from 'element-ui/src/locale/lang/fa';


  @Component({
    components: {
      Toast,
      vanField,
      [Dialog.Component.name]: Dialog.Component
    },
    filters: {
      formatDate(date, vm) {  //当前时间格式化处理
        var str = "";
        str += vm.setZero(date.getHours()) + ":"; //获取时
        str += vm.setZero(date.getMinutes()) + ":"; //获取分
        str += vm.setZero(date.getSeconds()); //获取秒
        return str;
      },
      formatDateByDays(date, vm) {  //当前时间格式化处理
        var str = "";
        str += vm.setZero(date.getFullYear()) + "-"; //获取年份
        str += vm.setZero(date.getMonth() + 1) + "-"; //获取月份
        str += vm.setZero(date.getDate()) + ""; //获取日
        return str;
      }
    }
  })
  export default class extends Vue {
    router_name: string = '';
    userData: any = {
      markCode:this.getRandomCode(),
      leaveSchool:'08:00:00',
      returnSchool:'20:00:00',
      sendTime:'07:30:21',
      name: '谢楚昕',
      code:'1830050039',
      sex:'女',
      discipline:'数学与应用科学（师范）',
      reason:'买东西',
      suggest:'系统自动审批',
      suggestName:'自动审批'
    };
    tagNum:number = 0
    leaveSchoolFlag:boolean = true
    date:any =  new Date() //当前日期
    timer:any
    changeInfoFlag:boolean = false
    inSchool:boolean = true

    getLeaveSchoolDay(){}

    getRandomCode(){
      let num = ''
      for (var i = 0; i < 4; i++) {
        num += Math.floor(Math.random() * 10);
      }
      return '00075'+num
    }

    setZero(a) {//设置小于10的数字在加0
      return a < 10 ? "0" + a : a;
    }


    tagNumChange(){
      this.tagNum ++
      if (this.tagNum > 4){
        this.tagNum = 1
        this.changeInfoFlag = true
      }
    }

    mounted(){
      var _this = this;
      this.timer = setInterval(() => {
        _this.date = new Date(); // 修改日期数据
      }, 1000);
    }

    leaveSchool(){
      Toast.loading({
        message: '',
        forbidClick: true,
        onClose:()=>{
          Toast.success('提交成功');
          this.leaveSchoolFlag = false
        }
      })
    }

    enterSchool(){
      console.log('进入学习')
      this.leaveSchoolFlag = false
    }

  }
</script>

<style src="./chunk.css"></style>
