<template lang="pug">
.MainMenu
  template(v-for="item of companyList")
    CompanyButton(
      :id="item.id"
      :size="item.size"
      :x="item.x"
      :y="item.y"
    )
</template>
<script>
import CompanyButton from './CompanyButton'

export default {
  components: {
    CompanyButton,
  },

  setup () {
    const companyList = [
      // l
      { id: '00FFG', size: 'l', x: 1555, y: 86 },
      // m
      { id: '02FEELER', size: 'm', x: 1146, y: 180 },
      { id: '07SNK', size: 'm', x: 1116, y: 591 },
      { id: '22MAG', size: 'm', x: 2388, y: 163 },
      { id: '29JOBS', size: 'm', x: 2378, y: 559 },
      // s
      { id: '03LEADWELL', size: 's', x: 729, y: 120 },
      { id: '04EQUIPTOP', size: 's', x: 883, y: 445 },
      { id: '05ECOCA', size: 's', x: 413, y: 495 },
      { id: '06SANCO', size: 's', x: 273, y: 249 },
      { id: '08NISSIN', size: 's', x: 662, y: 684 },
      { id: '09TAISEI', size: 's', x: 173, y: 823 },
      { id: '10IKEGAI', size: 's', x: 949, y: 988 },
      { id: '11FT', size: 's', x: 421, y: 1037 },
      { id: '12TAKAMAZFEELER', size: 's', x: 1269, y: 1212 },
      { id: '13WAIDAZFEELER', size: 's', x: 956, y: 1323 },
      { id: '14MECTRONFEELER', size: 's', x: 601, y: 1327 },
      { id: '15TAKEUCHI', size: 's', x: 771, y: 1603 },
      { id: '16SEC', size: 's', x: 407, y: 1694 },
      { id: '17DMC', size: 's', x: 1364, y: 1593 },
      { id: '18DSK', size: 's', x: 1103, y: 1818 },
      { id: '19SMS', size: 's', x: 1898, y: 1236 },
      { id: '20CROSSHULLER', size: 's', x: 1684, y: 1724 },
      { id: '21LAMB', size: 's', x: 2172, y: 1677 },
      { id: '23VDF', size: 's', x: 3302, y: 197 },
      { id: '24HESSAPP', size: 's', x: 2831, y: 109 },
      { id: '25WITZIGFRANK', size: 's', x: 2807, y: 570 },
      { id: '26MODUL', size: 's', x: 3085, y: 412 },
      { id: '27EXCELLO', size: 's', x: 3296, y: 705 },
      { id: '28HONSBERG', size: 's', x: 2762, y: 936 },
      { id: '30RAMBAUDI', size: 's', x: 2447, y: 1067 },
      { id: '31SACHMAN', size: 's', x: 2917, y: 1278 },
      { id: '32SIGMA', size: 's', x: 3191, y: 1153 },
      { id: '33IMAS', size: 's', x: 2307, y: 1372 },
      { id: '34MECCANODORA', size: 's', x: 2608, y: 1510 },
      { id: '35MORARA', size: 's', x: 2881, y: 1738 },
      { id: '36TACCHELLA', size: 's', x: 3312, y: 1600 },
      { id: '37PFIFFNER', size: 's', x: 1571, y: 1350 },
    ]

    return {
      companyList,
    }
  },
}
</script>
<style lang="scss" scoped>
.MainMenu {
  position: relative;
  width: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url('../../assets/indexbg.jpg');
}
</style>
