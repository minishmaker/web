<template>
  <div class="container">
    <div class="context-buttons">
      <button @click.prevent="simple = !simple">
        {{ simple ? 'Show full tracker' : 'Show simple tracker' }}
      </button>
      <button @click.self="showColorPicker = !showColorPicker">
        {{ showColorPicker ? 'Hide color picker' : 'Show color picker' }}
        <no-ssr>
          <chrome-color-picker v-show="showColorPicker" :value="backgroundColor" @input="updateBackgroundColor" />
        </no-ssr>
      </button>
    </div>
    <div class="tracker">
      <table :style="{ backgroundColor }" class="table table-centered">
        <tr>
          <th colspan="8">
            Tracker made by cubesolver111
          </th>
        </tr>
        <tbody>
          <tr>
            <td><img ref="swords" :src="require(`../assets/item_sprites/${swordsImage}`)" @click="changeSword()" /></td>
            <td><img ref="jar" :src="require(`../assets/item_sprites/${jarImage}`)" @click="changeJar()" /></td>
            <td><img ref="cane" :src="require(`../assets/item_sprites/${caneImage}`)" @click="changeCane()" /></td>
            <td><img ref="rang" :src="require(`../assets/item_sprites/${rangImage}`)" @click="changeRang()" /></td>
            <td><img ref="wallet" :src="require(`../assets/item_sprites/${walletImage}`)" @click="changeWallet()" /></td>
            <td v-show="!simple">DWS</td>
            <td v-show="!simple"><img ref="dwsBig" :src="require(`../assets/item_sprites/${bigKeyImage}`)" @click="changeBigKey('dwsBig')" /></td>
            <td v-show="!simple"><img ref="dwsSmall" :src="require(`../assets/item_sprites/${dwsSmallKeyImage}`)" @click="changeSmallKey('dwsSmall')" /></td>
          </tr>
          <tr>
            <td><img ref="shields" :src="require(`../assets/item_sprites/${shieldsImage}`)" @click="changeShield()" /></td>
            <td><img ref="mitts" :src="require(`../assets/item_sprites/${mittsImage}`)" @click="changeMitts()" /></td>
            <td><img ref="lantern" :src="require(`../assets/item_sprites/${lanternImage}`)" @click="changeLantern()" /></td>
            <td><img ref="bombs" :src="require(`../assets/item_sprites/${bombsImage}`)" @click="changeBombs()" /></td>
            <td><img ref="goldWilds" :src="require(`../assets/item_sprites/Kinstones/${stonesWildsImage}`)" @click="changeStonesWilds()" /></td>
            <td v-show="!simple">COF</td>
            <td v-show="!simple"><img ref="cofBig" :src="require(`../assets/item_sprites/${bigKeyImage}`)" @click="changeBigKey('cofBig')" /></td>
            <td v-show="!simple"><img ref="cofSmall" :src="require(`../assets/item_sprites/${cofSmallKeyImage}`)" @click="changeSmallKey('cofSmall')" /></td>
          </tr>
          <tr>
            <td><img ref="boots" :src="require(`../assets/item_sprites/${bootsImage}`)" @click="changeBoots()" /></td>
            <td><img ref="cape" :src="require(`../assets/item_sprites/${capeImage}`)" @click="changeCape()" /></td>
            <td><img ref="ocarina" :src="require(`../assets/item_sprites/${fluteImage}`)" @click="changeFlute()" /></td>
            <td><img ref="bow" :src="require(`../assets/item_sprites/${bowImage}`)" @click="changeBow()" /></td>
            <td><img ref="goldClouds" :src="require(`../assets/item_sprites/Kinstones/${stonesCloudsImage}`)" @click="changeStonesClouds()" /></td>
            <td v-show="!simple">FOW</td>
            <td v-show="!simple"><img ref="fowBig" :src="require(`../assets/item_sprites/${bigKeyImage}`)" @click="changeBigKey('fowBig')" /></td>
            <td v-show="!simple"><img ref="fowSmall" :src="require(`../assets/item_sprites/${fowSmallKeyImage}`)" @click="changeSmallKey('fowSmall')" /></td>
          </tr>
          <tr>
            <td><img ref="bottles" :src="require(`../assets/item_sprites/${bottlesImage}`)" @click="changeBottles()" /></td>
            <td><img ref="jabber" :src="require(`../assets/item_sprites/${jabberImage}`)" @click="changeJabber()" /></td>
            <td><img ref="mushroom" :src="require(`../assets/item_sprites/${mushroomImage}`)" @click="changeMushroom()" /></td>
            <td><img ref="llrKey" :src="require(`../assets/item_sprites/${llrImage}`)" @click="changeLlrKey()" /></td>
            <td><img ref="goldFalls" :src="require(`../assets/item_sprites/Kinstones/${stonesFallsImage}`)" @click="changeStonesFalls()" /></td>
            <td v-show="!simple">TOD</td>
            <td v-show="!simple"><img ref="todBig" :src="require(`../assets/item_sprites/${bigKeyImage}`)" @click="changeBigKey('todBig')" /></td>
            <td v-show="!simple"><img ref="todSmall" :src="require(`../assets/item_sprites/${todSmallKeyImage}`)" @click="changeSmallKey('todSmall')" /></td>
          </tr>
          <tr>
            <td><img ref="gripRing" :src="require(`../assets/item_sprites/${gripRingImage}`)" @click="changeGripRing()" /></td>
            <td><img ref="bracelets" :src="require(`../assets/item_sprites/${braceletsImage}`)" @click="changeBracelets()" /></td>
            <td><img ref="flippers" :src="require(`../assets/item_sprites/${flippersImage}`)" @click="changeFlippers()" /></td>
            <td><img ref="graveKey" :src="require(`../assets/item_sprites/${graveKeyImage}`)" @click="changeGraveKey()" /></td>
            <td><img ref="carlovMedal" :src="require(`../assets/item_sprites/${carlovImage}`)" @click="changeCarlov()" /></td>
            <td v-show="!simple">POW</td>
            <td v-show="!simple"><img ref="powBig" :src="require(`../assets/item_sprites/${bigKeyImage}`)" @click="changeBigKey('powBig')" /></td>
            <td v-show="!simple"><img ref="powSmall" :src="require(`../assets/item_sprites/${powSmallKeyImage}`)" @click="changeSmallKey('powSmall')" /></td>
          </tr>
          <tr>
            <td><img ref="earth" :src="require(`../assets/item_sprites/${earthImage}`)" @click="changeEarth()" /></td>
            <td><img ref="fire" :src="require(`../assets/item_sprites/${fireImage}`)" @click="changeFire()" /></td>
            <td><img ref="water" :src="require(`../assets/item_sprites/${waterImage}`)" @click="changeWater()" /></td>
            <td><img ref="wind" :src="require(`../assets/item_sprites/${windImage}`)" @click="changeWind()" /></td>
            <td><img ref="cryptSmall" :src="require(`../assets/item_sprites/${cryptSmallKeyImage}`)" @click="changeSmallKey('cryptSmall', 'Crypt_Key')" /></td>
            <td v-show="!simple">DHC</td>
            <td v-show="!simple"><img ref="dhcBig" :src="require(`../assets/item_sprites/${bigKeyImage}`)" @click="changeBigKey('dhcBig')" /></td>
            <td v-show="!simple"><img ref="dhcSmall" :src="require(`../assets/item_sprites/${dhcSmallKeyImage}`)" @click="changeSmallKey('dhcSmall')" /></td>
          </tr>
          <tr v-show="!simple">
            <td>
              <img
                ref="greenArrow"
                :src="require(`../assets/item_sprites/Kinstones/${greenArrowImage}`)"
                @click="changeKinstones('greenArrow', 'Green Arrow/Green Kinstone Arrow')" />
            </td>
            <td>
              <img
                ref="greenBracket"
                :src="require(`../assets/item_sprites/Kinstones/${greenBracketImage}`)"
                @click="changeKinstones('greenBracket', 'Green Bracket/Green Kinstone Bracket')" />
            </td>
            <td>
              <img
                ref="greenP"
                :src="require(`../assets/item_sprites/Kinstones/${greenPImage}`)"
                @click="changeKinstones('greenP', 'Green P/Green Kinstone P')" />
            </td>
            <td>
              <img
                ref="blue6"
                :src="require(`../assets/item_sprites/Kinstones/${blue6Image}`)"
                @click="changeKinstones('blue6', 'Blue 6/Blue Kinstone 6')" />
            </td>
            <td>
              <img
                ref="blueL"
                :src="require(`../assets/item_sprites/Kinstones/${blueLImage}`)"
                @click="changeKinstones('blueL', 'Blue L/Blue Kinstone L')" />
            </td>
            <td>
              <img
                ref="redArrow"
                :src="require(`../assets/item_sprites/Kinstones/${redArrowImage}`)"
                @click="changeKinstones('redArrow', 'Red Arrow/Red Kinstone Arrow')" />
            </td>
            <td>
              <img
                ref="red3"
                :class="red3 > 0 ? 'on' : ''"
                :src="require(`../assets/item_sprites/Kinstones/${red3Image}`)"
                @click="changeKinstones('red3', 'Red 3/Red Kinstone 3')" />
            </td>
            <td>
              <img
                ref="redE"
                :src="require(`../assets/item_sprites/Kinstones/${redEImage}`)"
                @click="changeKinstones('redE', 'Red E/Red Kinstone E')" />
            </td>
          </tr>
          <tr>
            <td><img ref="spinAttack" :src="require(`../assets/item_sprites/${spinAttackImage}`)" @click="changeSpinAttack()" /></td>
            <td><img ref="rockBreaker" :src="require(`../assets/item_sprites/${rockBreakerImage}`)" @click="changeRockBreaker()" /></td>
            <td><img ref="dashAttack" :src="require(`../assets/item_sprites/${dashAttackImage}`)" @click="changeDashAttack()" /></td>
            <td><img ref="downThrust" :src="require(`../assets/item_sprites/${downThrustImage}`)" @click="changeDownThrust()" /></td>
            <td v-show="simple">
              <img
                ref="red3"
                :src="require(`../assets/item_sprites/Kinstones/${red3Image}`)"
                @click="changeKinstones('red3', 'Red 3/Red Kinstone 3')" />
            </td>
            <td v-show="!simple"><img ref="rollAttack" :class="hasRollAttack ? 'on' : ''" :src="require(`../assets/item_sprites/${rollAttackImage}`)" @click="changeRollAttack()" /></td>
            <td v-show="!simple"><img ref="swordBeam" :class="hasSwordBeam ? 'on' : ''" :src="require(`../assets/item_sprites/${swordBeamImage}`)" @click="changeSwordBeam()" /></td>
            <td v-show="!simple"><img ref="perilBeam" :class="hasPerilBeam ? 'on' : ''" :src="require(`../assets/item_sprites/${perilBeamImage}`)" @click="changePerilBeam()" /></td>
            <td v-show="!simple"><img ref="greatSpinAttack" :class="hasGreatSpinAttack ? 'on' : ''" :src="require(`../assets/item_sprites/${greatSpinAttackImage}`)" @click="changeGreatSpinAttack()" /></td>
          </tr>
          <tr v-show="simple">
            <td><img ref="rollAttack" :src="require(`../assets/item_sprites/${rollAttackImage}`)" @click="changeRollAttack()" /></td>
            <td><img ref="swordBeam" :src="require(`../assets/item_sprites/${swordBeamImage}`)" @click="changeSwordBeam()" /></td>
            <td><img ref="perilBeam" :src="require(`../assets/item_sprites/${perilBeamImage}`)" @click="changePerilBeam()" /></td>
            <td><img ref="greatSpinAttack" :src="require(`../assets/item_sprites/${greatSpinAttackImage}`)" @click="changeGreatSpinAttack()" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import {
    Chrome as ChromeColorPicker,
  } from 'vue-color';

  const defaultOptions = {
    bigKeyImage: 'Boss_Key.png',

    sword: 0,
    swordsImage: 'Smiths_Sword.png',
    hasJar: false,
    jarImage: 'Gust_Jar.png',
    hasCane: false,
    caneImage: 'Cane_of_Pacci.png',
    boomerang: 0,
    rangImage: 'Boomerang.png',
    wallet: 0,
    walletImage: 'Wallet300.png',
    hasdwsBig: false,
    dwsSmallKey: 0,
    dwsSmallKeyMax: 4,
    dwsSmallKeyImage: 'Small_Key.png',

    shield: 0,
    shieldsImage: 'Small_Shield.png',
    hasMitts: false,
    mittsImage: 'Mole_Mitts.png',
    hasLantern: false,
    lanternImage: 'Flame_Lantern.png',
    bombs: 0,
    bombsImage: 'Bomb.png',
    stonesWilds: 0,
    stonesWildsImage: 'Gold Kinstone (Wilds).png',
    hascofBig: false,
    cofSmallKey: 0,
    cofSmallKeyMax: 2,
    cofSmallKeyImage: 'Small_Key.png',

    hasBoots: false,
    bootsImage: 'Pegasus_Boots.png',
    hasCape: false,
    capeImage: 'Rocs_Cape.png',
    hasFlute: false,
    fluteImage: 'Ocarina_of_Wind.png',
    bow: 0,
    bowImage: 'Bow.png',
    stonesClouds: 0,
    stonesCloudsImage: 'Gold Kinstone (Clouds).png',
    hasfowBig: false,
    fowSmallKey: 0,
    fowSmallKeyMax: 4,
    fowSmallKeyImage: 'Small_Key.png',

    bottles: 0,
    bottlesImage: 'Empty_Bottle.png',
    hasJabber: false,
    jabberImage: 'Jabber_Nut.png',
    hasMushroom: false,
    mushroomImage: 'Wake_Up_Mushroom.png',
    hasLlrKey: false,
    llrImage: 'Lon_Lon_Ranch_Key.png',
    hasStonesFalls: false,
    stonesFallsImage: 'Gold Kinstone (Falls).png',
    hastodBig: false,
    todSmallKey: 0,
    todSmallKeyMax: 4,
    todSmallKeyImage: 'Small_Key.png',

    hasGripRing: false,
    gripRingImage: 'Grip_Ring.png',
    hasBracelets: false,
    braceletsImage: 'Power_Bracelets.png',
    hasFlippers: false,
    flippersImage: 'Flippers.png',
    hasGraveKey: false,
    graveKeyImage: 'Graveyard_Key.png',
    hasCarlov: false,
    carlovImage: 'Carlov_Medal.png',
    haspowBig: false,
    powSmallKey: 0,
    powSmallKeyMax: 5,
    powSmallKeyImage: 'Small_Key.png',

    hasEarth: false,
    earthImage: 'Earth_Element.png',
    hasFire: false,
    fireImage: 'Fire_Element.png',
    hasWater: false,
    waterImage: 'Water_Element.png',
    hasWind: false,
    windImage: 'Wind_Element.png',
    cryptSmallKey: 0,
    cryptSmallKeyMax: 3,
    cryptSmallKeyImage: 'Crypt_Key.png',
    hasdhcBig: false,
    dhcSmallKey: 0,
    dhcSmallKeyMax: 6,
    dhcSmallKeyImage: 'Small_Key.png',

    greenArrow: 0,
    greenArrowImage: 'Green Arrow/Green Kinstone Arrow.png',
    greenArrowMax: 20,
    greenBracket: 0,
    greenBracketImage: 'Green Bracket/Green Kinstone Bracket.png',
    greenBracketMax: 20,
    greenP: 0,
    greenPImage: 'Green P/Green Kinstone P.png',
    greenPMax: 20,
    blue6: 0,
    blue6Image: 'Blue 6/Blue Kinstone 6.png',
    blue6Max: 10,
    blueL: 0,
    blueLImage: 'Blue L/Blue Kinstone L.png',
    blueLMax: 10,
    redArrow: 0,
    redArrowImage: 'Red Arrow/Red Kinstone Arrow.png',
    redArrowMax: 10,
    red3: 0,
    red3Image: 'Red 3/Red Kinstone 3.png',
    red3Max: 10,
    redE: 0,
    redEImage: 'Red E/Red Kinstone E.png',
    redEMax: 10,

    hasSpinAttack: false,
    spinAttackImage: 'Spin_Attack.png',
    hasRockBreaker: false,
    rockBreakerImage: 'Rock_Breaker.png',
    hasDashAttack: false,
    dashAttackImage: 'Dash_Attack.png',
    hasDownThrust: false,
    downThrustImage: 'Down_Thrust.png',
    hasRollAttack: false,
    rollAttackImage: 'Roll_Attack.png',
    hasSwordBeam: false,
    swordBeamImage: 'Sword_Beam.png',
    hasPerilBeam: false,
    perilBeamImage: 'Peril_Beam.png',
    hasGreatSpinAttack: false,
    greatSpinAttackImage: 'Great_Spin_Attack.png',
  };

  export default {
    name: 'Tracker',

    head() {
      return {
        title: 'Tracker',
        meta: [
          {
            hid: 'description',
            name: 'description',
            description: 'Track your progress through a generated playthrough',
          },
        ],
      };
    },

    components: {
      ChromeColorPicker,
    },

    // If a variable has the word 'has' in it, it is a true/false variable
    //   that gets taoggled when clicked.
    // If the variable is a number, there are multiple upgrades to the item or
    //   it is treated as a counter that is incremented on click, then reset after a certain point.
    // The variables are broken up into 8 groups of 8 as they appear in the rows on the tracker.
    data() {
      return Object.assign({
        simple: true,
        showColorPicker: false,
        backgroundColor: '#A47312',
      }, defaultOptions);
    },

    // Like the variables, it is split up into 8 groups of 8 as the items appear
    //   in each row on the tracker.
    // I could make every item with multiple upgrades use the same type of function as
    //   the kinstones and small keys, but I prefer the more descriptive image names.
    // The only one I am considering changing to fit this style is the bow.
    methods: {
      updateBackgroundColor(val) {
        this.backgroundColor = val.hex;
      },
      // Row 1
      changeSword() {
        if (this.sword === 0) {
          this.$refs.swords.style.filter = 'grayscale(0%)';
          this.sword++;
        } else if (this.sword === 1) {
          this.swordsImage = 'Green_Sword.png';
          this.sword++;
        } else if (this.sword === 2) {
          this.swordsImage = 'Red_Sword.png';
          this.sword++;
        } else if (this.sword === 3) {
          this.swordsImage = 'Blue_Sword.png';
          this.sword++;
        } else if (this.sword === 4) {
          this.swordsImage = 'Four_Sword.png';
          this.sword++;
        } else {
          this.swordsImage = 'Smiths_Sword.png';
          this.$refs.swords.style.filter = 'grayscale(100%)';
          this.sword = 0;
        }
      },
      changeJar() {
        if (!this.hasJar) {
          this.$refs.jar.style.filter = 'grayscale(0%)';
          this.hasJar = true;
        } else {
          this.$refs.jar.style.filter = 'grayscale(100%)';
          this.hasJar = false;
        }
      },
      changeCane() {
        if (!this.hasCane) {
          this.$refs.cane.style.filter = 'grayscale(0%)';
          this.hasCane = true;
        } else {
          this.$refs.cane.style.filter = 'grayscale(100%)';
          this.hasCane = false;
        }
      },
      changeRang() {
        if (this.boomerang === 0) {
          this.$refs.rang.style.filter = 'grayscale(0%)';
          this.boomerang = 1;
        } else if (this.boomerang === 1) {
          this.rangImage = 'Magical_Boomerang.png';
          this.boomerang = 2;
        } else {
          this.rangImage = 'Boomerang.png';
          this.$refs.rang.style.filter = 'grayscale(100%)';
          this.boomerang = 0;
        }
      },
      changeWallet() {
        if (this.wallet === 0) {
          this.walletImage = 'Wallet300alt.png';
          this.$refs.wallet.style.filter = 'grayscale(0%)';
          this.wallet++;
        } else if (this.wallet === 1) {
          this.walletImage = 'Wallet500alt.png';
          this.wallet++;
        } else if (this.wallet === 2) {
          this.walletImage = 'Wallet999alt.png';
          this.wallet++;
        } else {
          this.walletImage = 'Wallet300.png';
          this.$refs.wallet.style.filter = 'grayscale(100%)';
          this.wallet = 0;
        }
      },
      changeBigKey(keyName) {
        const tempKeyName = `has${keyName}Big`;

        if (!this[tempKeyName]) {
          this.$refs[keyName].style.filter = 'grayscale(0%)';
          this[tempKeyName] = true;
        } else {
          this.$refs[keyName].style.filter = 'grayscale(100%)';
          this[tempKeyName] = false;
        }
      },
      changeSmallKey(keyName, keyImage = 'Small_Key') {
        const tempKeyName = `${keyName}Key`;
        const tempKeyImageName = `${keyName}KeyImage`;

        if (this[tempKeyName] < this[`${tempKeyName}Max`]) {
          this[tempKeyName]++;
          this.$refs[keyName].style.filter = 'grayscale(0%)';
          this[tempKeyImageName] = `${keyImage}${this[tempKeyName]}.png`;
        } else {
          this.$refs[keyName].style.filter = 'grayscale(100%)';
          this[tempKeyImageName] = `${keyImage}.png`;
          this[tempKeyName] = 0;
        }
      },

      // Row 2
      changeShield() {
        if (this.shield === 0) {
          this.$refs.shields.style.filter = 'grayscale(0%)';
          this.shield++;
        } else if (this.shield === 1) {
          this.shieldsImage = 'Mirror_Shield.png';
          this.shield++;
        } else {
          this.shieldsImage = 'Small_Shield.png';
          this.$refs.shields.style.filter = 'grayscale(100%)';
          this.shield = 0;
        }
      },
      changeMitts() {
        if (!this.hasMitts) {
          this.$refs.mitts.style.filter = 'grayscale(0%)';
          this.hasMitts = true;
        } else {
          this.$refs.mitts.style.filter = 'grayscale(100%)';
          this.hasMitts = false;
        }
      },
      changeLantern() {
        if (!this.hasLantern) {
          this.$refs.lantern.style.filter = 'grayscale(0%)';
          this.lanternImage = 'Flame_Lantern_(Lit).png';
          this.hasLantern = true;
        } else {
          this.$refs.lantern.style.filter = 'grayscale(100%)';
          this.lanternImage = 'Flame_Lantern.png';
          this.hasLantern = false;
        }
      },
      changeBombs() {
        if (this.bombs === 0) {
          this.$refs.bombs.style.filter = 'grayscale(0%)';
          this.bombs++;
        } else if (this.bombs === 1) {
          this.bombsImage = 'Remote_Bombs.png';
          this.bombs++;
        } else {
          this.bombsImage = 'Bomb.png';
          this.$refs.bombs.style.filter = 'grayscale(100%)';
          this.bombs = 0;
        }
      },
      changeStonesWilds() {
        if (this.stonesWilds < 3) {
          this.stonesWilds++;
          this.stonesWildsImage = `Gold Kinstone (Wilds)${this.stonesWilds}.png`;
          this.$refs.goldWilds.style.filter = 'grayscale(0%)';
        } else {
          this.stonesWildsImage = 'Gold Kinstone (Wilds).png';
          this.$refs.goldWilds.style.filter = 'grayscale(100%)';
          this.stonesWilds = 0;
        }
      },

      // Row 3
      changeBoots() {
        if (!this.hasBoots) {
          this.$refs.boots.style.filter = 'grayscale(0%)';
          this.hasBoots = true;
        } else {
          this.$refs.boots.style.filter = 'grayscale(100%)';
          this.hasBoots = false;
        }
      },
      changeCape() {
        if (!this.hasCape) {
          this.$refs.cape.style.filter = 'grayscale(0%)';
          this.hasCape = true;
        } else {
          this.$refs.cape.style.filter = 'grayscale(100%)';
          this.hasCape = false;
        }
      },
      changeFlute() {
        if (!this.hasFlute) {
          this.$refs.ocarina.style.filter = 'grayscale(0%)';
          this.hasFlute = true;
        } else {
          this.$refs.ocarina.style.filter = 'grayscale(100%)';
          this.hasFlute = false;
        }
      },
      changeBow() {
        if (this.bow === 0) {
          this.$refs.bow.style.filter = 'grayscale(0%)';
          this.bowImage = 'Bow30.png';
          this.bow++;
        } else if (this.bow === 1) {
          this.bowImage = 'Bow50.png';
          this.bow++;
        } else if (this.bow === 2) {
          this.bowImage = 'Bow70.png';
          this.bow++;
        } else if (this.bow === 3) {
          this.bowImage = 'Bow99.png';
          this.bow++;
        } else if (this.bow === 4) {
          this.bowImage = 'Light_Arrow30.png';
          this.bow++;
        } else if (this.bow === 5) {
          this.bowImage = 'Light_Arrow50.png';
          this.bow++;
        } else if (this.bow === 6) {
          this.bowImage = 'Light_Arrow70.png';
          this.bow++;
        } else if (this.bow === 7) {
          this.bowImage = 'Light_Arrow99.png';
          this.bow++;
        } else {
          this.bowImage = 'Bow.png';
          this.$refs.bow.style.filter = 'grayscale(100%)';
          this.bow = 0;
        }
      },
      changeStonesClouds() {
        if (this.stonesClouds < 5) {
          this.stonesClouds++;
          this.stonesCloudsImage = `Gold Kinstone (Clouds)${this.stonesClouds}.png`;
          this.$refs.goldClouds.style.filter = 'grayscale(0%)';
        } else {
          this.stonesCloudsImage = 'Gold Kinstone (Clouds).png';
          this.$refs.goldClouds.style.filter = 'grayscale(100%)';
          this.stonesClouds = 0;
        }
      },

      // Row 4
      changeBottles() {
        if (this.bottles < 4) {
          this.bottles++;
          this.$refs.bottles.style.filter = 'grayscale(0%)';
          this.bottlesImage = `Empty_Bottle${this.bottles}.png`;
        } else {
          this.$refs.bottles.style.filter = 'grayscale(100%)';
          this.bottlesImage = 'Empty_Bottle.png';
          this.bottles = 0;
        }
      },
      changeJabber() {
        if (!this.hasJabber) {
          this.$refs.jabber.style.filter = 'grayscale(0%)';
          this.hasJabber = true;
        } else {
          this.$refs.jabber.style.filter = 'grayscale(100%)';
          this.hasJabber = false;
        }
      },
      changeMushroom() {
        if (!this.hasMushroom) {
          this.$refs.mushroom.style.filter = 'grayscale(0%)';
          this.hasMushroom = true;
        } else {
          this.$refs.mushroom.style.filter = 'grayscale(100%)';
          this.hasMushroom = false;
        }
      },
      changeLlrKey() {
        if (!this.hasLLRKey) {
          this.$refs.llrKey.style.filter = 'brightness(120%)';
          this.hasLLRKey = true;
        } else {
          this.$refs.llrKey.style.filter = 'grayscale(100%)';
          this.hasLLRKey = false;
        }
      },
      changeStonesFalls() {
        if (!this.hasStonesFalls) {
          this.$refs.goldFalls.style.filter = 'grayscale(0%)';
          this.hasStonesFalls = true;
        } else {
          this.$refs.goldFalls.style.filter = 'grayscale(100%)';
          this.hasStonesFalls = false;
        }
      },

      // Row 5
      changeGripRing() {
        if (!this.hasGripRing) {
          this.$refs.gripRing.style.filter = 'grayscale(0%)';
          this.hasGripRing = true;
        } else {
          this.$refs.gripRing.style.filter = 'grayscale(100%)';
          this.hasGripRing = false;
        }
      },
      changeBracelets() {
        if (!this.hasBracelets) {
          this.$refs.bracelets.style.filter = 'grayscale(0%)';
          this.hasBracelets = true;
        } else {
          this.$refs.bracelets.style.filter = 'grayscale(100%)';
          this.hasBracelets = false;
        }
      },
      changeFlippers() {
        if (!this.hasFlippers) {
          this.$refs.flippers.style.filter = 'grayscale(0%)';
          this.hasFlippers = true;
        } else {
          this.$refs.flippers.style.filter = 'grayscale(100%)';
          this.hasFlippers = false;
        }
      },
      changeGraveKey() {
        if (!this.hasGraveKey) {
          this.$refs.graveKey.style.filter = 'grayscale(0%)';
          this.hasGraveKey = true;
        } else {
          this.$refs.graveKey.style.filter = 'grayscale(100%)';
          this.hasGraveKey = false;
        }
      },
      changeCarlov() {
        if (!this.hasCarlov) {
          this.$refs.carlovMedal.style.filter = 'grayscale(0%)';
          this.hasCarlov = true;
        } else {
          this.$refs.carlovMedal.style.filter = 'grayscale(100%)';
          this.hasCarlov = false;
        }
      },

      // Row 6
      changeEarth() {
        if (!this.hasEarth) {
          this.$refs.earth.style.filter = 'grayscale(0%)';
          this.hasEarth = true;
        } else {
          this.$refs.earth.style.filter = 'grayscale(100%)';
          this.hasEarth = false;
        }
      },
      changeFire() {
        if (!this.hasFire) {
          this.$refs.fire.style.filter = 'grayscale(0%)';
          this.hasFire = true;
        } else {
          this.$refs.fire.style.filter = 'grayscale(100%)';
          this.hasFire = false;
        }
      },
      changeWater() {
        if (!this.hasWater) {
          this.$refs.water.style.filter = 'grayscale(0%)';
          this.hasWater = true;
        } else {
          this.$refs.water.style.filter = 'grayscale(100%)';
          this.hasWater = false;
        }
      },
      changeWind() {
        if (!this.hasWind) {
          this.$refs.wind.style.filter = 'grayscale(0%)';
          this.hasWind = true;
        } else {
          this.$refs.wind.style.filter = 'grayscale(100%)';
          this.hasWind = false;
        }
      },

      // Row 7
      changeKinstones(stoneName, stoneImage) {
        const tempStoneImageName = `${stoneName}Image`;

        if (this[stoneName] < this[`${stoneName}Max`]) {
          this[stoneName]++;
          this.$refs[stoneName].style.filter = 'grayscale(0%)';
          this[tempStoneImageName] = `${stoneImage}${this[stoneName]}.png`;
        } else {
          this.$refs[stoneName].style.filter = 'grayscale(100%)';
          this[tempStoneImageName] = `${stoneImage}.png`;
          this[stoneName] = 0;
        }
      },

      // Row 8
      changeSpinAttack() {
        if (!this.hasSpinAttack) {
          this.$refs.spinAttack.style.filter = 'grayscale(0%)';
          this.hasSpinAttack = true;
        } else {
          this.$refs.spinAttack.style.filter = 'grayscale(100%)';
          this.hasSpinAttack = false;
        }
      },
      changeRockBreaker() {
        if (!this.hasRockBreaker) {
          this.$refs.rockBreaker.style.filter = 'grayscale(0%)';
          this.hasRockBreaker = true;
        } else {
          this.$refs.rockBreaker.style.filter = 'grayscale(100%)';
          this.hasRockBreaker = false;
        }
      },
      changeDashAttack() {
        if (!this.hasDashAttack) {
          this.$refs.dashAttack.style.filter = 'grayscale(0%)';
          this.hasDashAttack = true;
        } else {
          this.$refs.dashAttack.style.filter = 'grayscale(100%)';
          this.hasDashAttack = false;
        }
      },
      changeDownThrust() {
        if (!this.hasDownThrust) {
          this.$refs.downThrust.style.filter = 'grayscale(0%)';
          this.hasDownThrust = true;
        } else {
          this.$refs.downThrust.style.filter = 'grayscale(100%)';
          this.hasDownThrust = false;
        }
      },
      changeRollAttack() {
        if (!this.hasRollAttack) {
          this.$refs.rollAttack.style.filter = 'grayscale(0%)';
          this.hasRollAttack = true;
        } else {
          this.$refs.rollAttack.style.filter = 'grayscale(100%)';
          this.hasRollAttack = false;
        }
      },
      changeSwordBeam() {
        if (!this.hasSwordBeam) {
          this.$refs.swordBeam.style.filter = 'grayscale(0%)';
          this.hasSwordBeam = true;
        } else {
          this.$refs.swordBeam.style.filter = 'grayscale(100%)';
          this.hasSwordBeam = false;
        }
      },
      changePerilBeam() {
        if (!this.hasPerilBeam) {
          this.$refs.perilBeam.style.filter = 'grayscale(0%)';
          this.hasPerilBeam = true;
        } else {
          this.$refs.perilBeam.style.filter = 'grayscale(100%)';
          this.hasPerilBeam = false;
        }
      },
      changeGreatSpinAttack() {
        if (!this.hasGreatSpinAttack) {
          this.$refs.greatSpinAttack.style.filter = 'grayscale(0%)';
          this.hasGreatSpinAttack = true;
        } else {
          this.$refs.greatSpinAttack.style.filter = 'grayscale(100%)';
          this.hasGreatSpinAttack = false;
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .container {
    display: unset;
  }

  .context-buttons {
    margin-top: 20px;
    display: flex;
    justify-content: center;

    & > :not(:first-child) {
      margin-left: 10px;
    }

    button {
      padding: 5px;
      position: relative;
    }

    .vc-chrome {
      position: absolute;
      z-index: 10;
      left: 125px;
      top: -1px;
    }
  }

  .tracker {
    display: flex;
    margin-top: 110px;
    justify-content: center;

    table {
      td {
        text-align: center;
        width: 48px;
        height: 48px;

        img {
          filter: grayscale(100%);

          &.on {
            filter: grayscale(0%);
          }
        }
      }
    }
  }
</style>
