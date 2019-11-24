<template>
  <div :class="['tooltip', caution ? 'caution' : '']">
    <span>
      {{ caution ? '!' : '?' }}
    </span>
    <span class="tooltip-text">
      <slot />
    </span>
  </div>
</template>

<script>
  export default {
    name: 'Tooltip',

    props: {
      caution: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '~@/assets/global-styles';
  $help-blue: rgb(42, 134, 255);
  $caution-yellow: rgb(185, 160, 16);

  .tooltip {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    font-weight: 600;
    font-size: 14px;
    border-radius: 16px;

    &.caution {
      color: $caution-yellow;
      border: 2px solid $caution-yellow;

      span:not(.tooltip-text) {
        position: absolute;
        left: calc(50% - 0.15rem);
        top: -1px;
      }

      .tooltip-text {
        border: 2px solid $caution-yellow;
      }
    }

    &:not(.caution) {
      color: $help-blue;
      border: 2px solid $help-blue;

      span:not(.tooltip-text) {
        position: absolute;
        left: calc(50% - 0.22rem);
        top: -1px;
      }

      .tooltip-text {
        border: 2px solid $help-blue;
      }
    }

    &:hover {
      cursor: help;

      .tooltip-text {
        visibility: visible;
      }
    }

    .tooltip-text {
      font-weight: initial;
      visibility: hidden;
      position: absolute;
      top: 140%;
      margin-left: -20px;
      width: 320px;
      background-color: $nav-background-color;
      color: black;
      text-align: center;
      padding: 4px;
      border-radius: 4px;
      z-index: 1;

      // Arrow
      // &:after {
      //   content: ' ';
      //   position: absolute;
      //   bottom: 100%;
      //   left: 18px;
      //   margin-left: -8px;
      //   border-width: 8px;
      //   border-style: solid;
      //   border-color: transparent transparent $help-blue transparent;
      // }
    }
  }
</style>
