<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease" v-show="food.count>0" @click.stop.prevent="decreaseCart">
        <span class="inner icon-remove_circle_outline"></span>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
  </div>
</template>

<script>
  import Vue from 'vue'
  const EVENT_ADD = "cart_add"
  export default {
    data() {
      return {

      }
    },
    props: {
      food: {
        type: Object
      }
    },
    methods: {
      addCart(event) {
        if(!event._constructed){
          return;
        }
        if(!this.food.count){
          Vue.set(this.food, 'count', 1)
        }else{
          this.food.count++;
        }
        //设置滚动对象时，点击加号，设置一个派发事件，将DOM对象传出去,将target（DOM）作为cart.add事件的对象传入
        //$emit, $on, $off 分别来分发、监听、取消监听事件：
        this.$emit(EVENT_ADD,event.target);
      },
      decreaseCart(event) {
        //解决PC端双点击的问题
        if(!event._constructed){//浏览器直接return掉,去掉自带click事件的点击
          return;
        }
        if(this.food.count){
          this.food.count--;
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    display flex
    font-size 0
    .cart-decrease
      display inline-block
      padding 6px
      opacity 1
      transform translate3d(0,0,0)
      .inner
        display inline-block
        line-height 24px
        font-size 24px
        color rgb(0,160,220)
        transition all 0.4s linear
        transform rotate(0)
      &.move-enter-active, &.move-leave-active
        transition all 0.4s linear
      &.move-enter, &.move-leave-to
        opacity 0
        transform translate3d(24px,0,0)
        .inner
          transform rotate(180deg)       
    .cart-count
      display inline-block
      vertical-align top
      width 12px
      padding-top 6px
      line-height 24px
      text-align center
      font-size 10px
      color rgb(147,153,159)
    .cart-add
      display inline-block
      padding 6px
      line-height 24px
      font-size 24px
      color rgb(0,160,220)
      
</style>
