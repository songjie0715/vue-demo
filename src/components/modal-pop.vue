<template>
    <transition name="modal">
        <div class="modal-pop">
            <div class="modal-contain">
                <p>哈哈哈</p>
                <a class="" @click="$emit('close')">关闭</a>
            </div>
          <div class="modal-mask"></div>
        </div>
    </transition>
</template>



<style>
    .modal-mask {
      position: fixed;
      z-index: 9998;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .5);
      display: table;
      transition: opacity .3s ease;
    }


    .modal-contain{
      position: relative;
      z-index: 1000000;
      width: 300px;
      margin: 0px auto;
      padding: 20px 30px;
      background-color: #fff;
      border-radius: 2px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
      transition: all .3s ease;
      font-family: Helvetica, Arial, sans-serif;
    }

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter, .modal-leave-active {
        transition: all .3s ease;
    }

    .modal-enter .modal-contain,
    .modal-leave-active .modal-contain {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>


