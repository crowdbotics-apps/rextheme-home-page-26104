import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_224_5}>
        <View style={styles.View_182_25}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5d6/4951/be3a6a046c84885effa1f75d2b921170"
            }}
            style={styles.ImageBackground_182_26}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c04d/a760/1c32cc20481798376a1ca5e66caa2c64"
            }}
            style={styles.ImageBackground_182_27}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70ee/b49c/b8403ed04599d6a150ed782c10bc0e65"
            }}
            style={styles.ImageBackground_182_28}
          />
        </View>
        <View style={styles.View_206_2}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0b2/f6f7/8b1f20a0053d9a50943ac84dba5af76b"
            }}
            style={styles.ImageBackground_206_0}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7b2/dd57/1b4bd87c5b60b3951400e7e1885d93b7"
            }}
            style={styles.ImageBackground_206_1}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12e8/eede/ac997c81cdd6f4f48eb646fa16409db6"
            }}
            style={styles.ImageBackground_206_4}
          />
        </View>
        <View style={styles.View_224_3}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b59/1a9b/c2582bc451f7b806b561e60984cb87cc"
            }}
            style={styles.ImageBackground_206_7}
          />
        </View>
        <View style={styles.View_215_31}>
          <View style={styles.View_215_32}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/557c/975a/ed3c8d2363d2a3ab6b3d19a919fe6897"
              }}
              style={styles.ImageBackground_215_33}
            />
          </View>
          <View style={styles.View_215_77}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c99c/9ade/e103f1d252a33aabec57ecbfcd84852c"
              }}
              style={styles.ImageBackground_215_78}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b89/98f3/53f8801b50d68e3f6607b0f5b577be4b"
              }}
              style={styles.ImageBackground_215_79}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ac5/9ce8/f04580ad1b77a4b6db6abd243517ab35"
              }}
              style={styles.ImageBackground_215_80}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e736/6ffe/fa00523bbb2b8fce382e9c6e2c88a436"
              }}
              style={styles.ImageBackground_215_81}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0510/add2/afe8bd478f67f4012b0d875a2e7be3ad"
              }}
              style={styles.ImageBackground_215_82}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98fb/850f/411df45ee2d1fa6c5cbd817133b93eef"
              }}
              style={styles.ImageBackground_215_83}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/189b/50fd/5e82ca8c48db0795085666ce8489be85"
              }}
              style={styles.ImageBackground_215_84}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0510/add2/afe8bd478f67f4012b0d875a2e7be3ad"
              }}
              style={styles.ImageBackground_215_85}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84fc/c293/d5ce4c5e51980a03e4776c549061f608"
              }}
              style={styles.ImageBackground_215_86}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9bb0/6aaf/aa46fd79dc593c87f6dd58f0a140acb2"
              }}
              style={styles.ImageBackground_215_87}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca89/c713/68566f1fccf4e9de1cbe650c571e74b3"
              }}
              style={styles.ImageBackground_215_88}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d85f/9b46/2dfdc3910bd757260857e0f5e9871e64"
              }}
              style={styles.ImageBackground_215_89}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9863/653e/e75d271abdd6b5e88fba579cf116dfa5"
              }}
              style={styles.ImageBackground_215_90}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce0a/36bd/1ff9955c2969bf6ba33e7558a30095e7"
              }}
              style={styles.ImageBackground_215_91}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76d/2c7a/d918ee005c410d0ea7000b74b1c218ca"
              }}
              style={styles.ImageBackground_215_92}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82d1/9d04/2b731ee8d5f4398df2be24dcb6d09555"
              }}
              style={styles.ImageBackground_215_93}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b4f/a415/411923cc263070a401aea7303846c071"
              }}
              style={styles.ImageBackground_215_94}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4aa8/596b/79619f4793f293400a9d8938fcb55a77"
              }}
              style={styles.ImageBackground_215_95}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d24/c790/b6241d2384872d39c7ced46d48782951"
              }}
              style={styles.ImageBackground_215_96}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3097/b6fb/c32f64e8c38b5e19b0d8258b75bf0c21"
              }}
              style={styles.ImageBackground_215_97}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5faa/514d/520badd6df9e54ec254a47a63ca8b44a"
              }}
              style={styles.ImageBackground_215_98}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d109/2458/c147c875629b3839083021b5a7c18982"
              }}
              style={styles.ImageBackground_215_99}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2eb0/18aa/a2e01ad453cb05abfe2f160bc29654f6"
              }}
              style={styles.ImageBackground_215_100}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df44/297a/bef2474c71e8c0db71392a6a060cc6e5"
              }}
              style={styles.ImageBackground_215_101}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de16/ca76/9d9bc67a2583f74be709b21f18eb8b00"
              }}
              style={styles.ImageBackground_215_102}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f90/93de/c4bfa1a7e3a59309f3a886c41fcface5"
              }}
              style={styles.ImageBackground_215_103}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25a1/decc/29a17c4b651ec40edc2980021c8e5c0a"
              }}
              style={styles.ImageBackground_215_104}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7996/119e/78fad352e1efcbcaa0d5d698c057f953"
              }}
              style={styles.ImageBackground_215_105}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b58b/2f47/e3aa147e712b35d16b7d8e0b302d5b5f"
              }}
              style={styles.ImageBackground_215_106}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7685/d4eb/568c6f8eae3a685788b6095faad29831"
              }}
              style={styles.ImageBackground_215_107}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f3b/a44f/df14658a97c8b7158a68a77428915081"
              }}
              style={styles.ImageBackground_215_108}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1673/9549/0d5eee7e53467706f8c9ad88a73a8ad2"
              }}
              style={styles.ImageBackground_215_109}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d25c/2d26/23f622e768b2cccb848b2a55dc50c638"
              }}
              style={styles.ImageBackground_215_110}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0767/c5b4/fe862d85930f6015667a700f3536650c"
              }}
              style={styles.ImageBackground_215_111}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3b7/8363/20f944151796ccba071d05cd83cbed45"
              }}
              style={styles.ImageBackground_215_112}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1d9/b9f3/1ba857461790dc0cb8318f118c225dfa"
              }}
              style={styles.ImageBackground_215_113}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/894a/22c4/36c148d350a22071cba92c24e867936d"
              }}
              style={styles.ImageBackground_215_114}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af6a/6785/fe3ebb4b041190633dbbfb52b6bc8ab0"
              }}
              style={styles.ImageBackground_215_115}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b493/b349/31fde2c3880eb127e4c130a1401bd05e"
              }}
              style={styles.ImageBackground_215_116}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a406/21e2/c04d47a42dd3c8547204a33e690b1a79"
              }}
              style={styles.ImageBackground_215_117}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da34/46e1/ed4e2205a1fb5f9880ee4cb4437ea1e2"
              }}
              style={styles.ImageBackground_215_118}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1347/06d7/40cfcb005328fd33acd8b5ea1b3fd928"
              }}
              style={styles.ImageBackground_215_119}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a04/5b78/ca2308d5ad2665cd60a8212c974fa969"
              }}
              style={styles.ImageBackground_215_120}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81ea/3be6/bd9bfc4cf76d2efd6adf20fa3d0f8488"
              }}
              style={styles.ImageBackground_215_121}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a05a/5500/e419a93deaee2a5ff23fea3c54a18ec1"
              }}
              style={styles.ImageBackground_215_122}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7af/bcab/52d0b3301b5e80383fea68dcce186acb"
              }}
              style={styles.ImageBackground_215_123}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39d5/11e4/bfad140b864fafa68aebe846803e09c1"
              }}
              style={styles.ImageBackground_215_124}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6c8/f383/3537d43bfa5e0e1dd924fb745d5ff864"
              }}
              style={styles.ImageBackground_215_125}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6c8/f383/3537d43bfa5e0e1dd924fb745d5ff864"
              }}
              style={styles.ImageBackground_215_126}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e05/495e/20dfecf3c2f7ecb92aa0a196d0e9a30a"
              }}
              style={styles.ImageBackground_215_127}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c712/86ca/825ada1c0f15d3b3cea538a28077a3ad"
              }}
              style={styles.ImageBackground_215_128}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3191/e80f/4773b7379253922e1b270499d45a16f7"
              }}
              style={styles.ImageBackground_215_129}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c712/86ca/825ada1c0f15d3b3cea538a28077a3ad"
              }}
              style={styles.ImageBackground_215_209}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98fb/850f/411df45ee2d1fa6c5cbd817133b93eef"
              }}
              style={styles.ImageBackground_215_210}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52be/2f78/7a166c15f78211971a590489eabe7a09"
              }}
              style={styles.ImageBackground_215_211}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f6d/aa6b/7ada0d48f2d6684f3774745aab7779b2"
              }}
              style={styles.ImageBackground_215_212}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52be/2f78/7a166c15f78211971a590489eabe7a09"
              }}
              style={styles.ImageBackground_215_213}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/702f/a224/5cfcd661f5390fc3b7940a540afd7965"
              }}
              style={styles.ImageBackground_215_214}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a53/390e/fc405654e2862b384c5627073988dc6c"
              }}
              style={styles.ImageBackground_215_215}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1210/4dfc/f83bfe6f82a8dd8393ad07d0b3043506"
              }}
              style={styles.ImageBackground_215_216}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2716/6b68/71b7094e67f479ac6f7a742e53e9284d"
              }}
              style={styles.ImageBackground_215_217}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8736/4a44/2b194eda0b6b3a2dcd8c1162db7d34ee"
              }}
              style={styles.ImageBackground_215_218}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29e3/68fb/405fe81361848e5d6e8ff2bf98a312bf"
              }}
              style={styles.ImageBackground_215_219}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29e3/68fb/405fe81361848e5d6e8ff2bf98a312bf"
              }}
              style={styles.ImageBackground_215_220}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29e3/68fb/405fe81361848e5d6e8ff2bf98a312bf"
              }}
              style={styles.ImageBackground_215_221}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8736/4a44/2b194eda0b6b3a2dcd8c1162db7d34ee"
              }}
              style={styles.ImageBackground_215_222}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29e3/68fb/405fe81361848e5d6e8ff2bf98a312bf"
              }}
              style={styles.ImageBackground_215_223}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29e3/68fb/405fe81361848e5d6e8ff2bf98a312bf"
              }}
              style={styles.ImageBackground_215_224}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29e3/68fb/405fe81361848e5d6e8ff2bf98a312bf"
              }}
              style={styles.ImageBackground_215_225}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29e3/68fb/405fe81361848e5d6e8ff2bf98a312bf"
              }}
              style={styles.ImageBackground_215_226}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29e3/68fb/405fe81361848e5d6e8ff2bf98a312bf"
              }}
              style={styles.ImageBackground_215_227}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29e3/68fb/405fe81361848e5d6e8ff2bf98a312bf"
              }}
              style={styles.ImageBackground_215_228}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29e3/68fb/405fe81361848e5d6e8ff2bf98a312bf"
              }}
              style={styles.ImageBackground_215_229}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29e3/68fb/405fe81361848e5d6e8ff2bf98a312bf"
              }}
              style={styles.ImageBackground_215_230}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29e3/68fb/405fe81361848e5d6e8ff2bf98a312bf"
              }}
              style={styles.ImageBackground_215_231}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e157/97f8/2015cd5f85f9057105ac77ca9b6158f0"
              }}
              style={styles.ImageBackground_215_232}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e026/23ea/9027a63ab595c1268db448145aee3737"
              }}
              style={styles.ImageBackground_215_233}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29e3/68fb/405fe81361848e5d6e8ff2bf98a312bf"
              }}
              style={styles.ImageBackground_215_234}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29e3/68fb/405fe81361848e5d6e8ff2bf98a312bf"
              }}
              style={styles.ImageBackground_215_235}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29e3/68fb/405fe81361848e5d6e8ff2bf98a312bf"
              }}
              style={styles.ImageBackground_215_236}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29e3/68fb/405fe81361848e5d6e8ff2bf98a312bf"
              }}
              style={styles.ImageBackground_215_237}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29e3/68fb/405fe81361848e5d6e8ff2bf98a312bf"
              }}
              style={styles.ImageBackground_215_238}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29e3/68fb/405fe81361848e5d6e8ff2bf98a312bf"
              }}
              style={styles.ImageBackground_215_239}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e157/97f8/2015cd5f85f9057105ac77ca9b6158f0"
              }}
              style={styles.ImageBackground_215_240}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49a8/f8cd/91855823bbe1bf76f123cd6ed20cc419"
              }}
              style={styles.ImageBackground_215_241}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1993/d6f4/9200d0f6b9831ee05f72a7f2b2385897"
              }}
              style={styles.ImageBackground_215_242}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7443/eecf/ab2f641ba3dfc5c01c70bdabbbbd62ea"
              }}
              style={styles.ImageBackground_215_243}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7443/eecf/ab2f641ba3dfc5c01c70bdabbbbd62ea"
              }}
              style={styles.ImageBackground_215_244}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1993/d6f4/9200d0f6b9831ee05f72a7f2b2385897"
              }}
              style={styles.ImageBackground_215_245}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7443/eecf/ab2f641ba3dfc5c01c70bdabbbbd62ea"
              }}
              style={styles.ImageBackground_215_246}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7443/eecf/ab2f641ba3dfc5c01c70bdabbbbd62ea"
              }}
              style={styles.ImageBackground_215_247}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1a1/1a84/112a28812eb9404ab04914dfc45c50d9"
              }}
              style={styles.ImageBackground_215_248}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7443/eecf/ab2f641ba3dfc5c01c70bdabbbbd62ea"
              }}
              style={styles.ImageBackground_215_249}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7443/eecf/ab2f641ba3dfc5c01c70bdabbbbd62ea"
              }}
              style={styles.ImageBackground_215_250}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d901/2916/b8f801c0837ef341c0ccb6b7d9f55e67"
              }}
              style={styles.ImageBackground_215_251}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10bb/a591/138c0f49ec2611efe5b630bc520b8a3a"
              }}
              style={styles.ImageBackground_215_252}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10bb/a591/138c0f49ec2611efe5b630bc520b8a3a"
              }}
              style={styles.ImageBackground_215_253}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8fb9/f981/3e0d4015d829dedeb287138c7a5c7a86"
              }}
              style={styles.ImageBackground_215_254}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d901/2916/b8f801c0837ef341c0ccb6b7d9f55e67"
              }}
              style={styles.ImageBackground_215_255}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbc0/91a4/d46d9324ce9dce017250ca66447d2ace"
              }}
              style={styles.ImageBackground_215_256}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1993/d6f4/9200d0f6b9831ee05f72a7f2b2385897"
              }}
              style={styles.ImageBackground_215_257}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92c9/adf2/c4893eb434120f06911702e73c1d6b03"
              }}
              style={styles.ImageBackground_215_258}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1993/d6f4/9200d0f6b9831ee05f72a7f2b2385897"
              }}
              style={styles.ImageBackground_215_259}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92c9/adf2/c4893eb434120f06911702e73c1d6b03"
              }}
              style={styles.ImageBackground_215_260}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1993/d6f4/9200d0f6b9831ee05f72a7f2b2385897"
              }}
              style={styles.ImageBackground_215_261}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92c9/adf2/c4893eb434120f06911702e73c1d6b03"
              }}
              style={styles.ImageBackground_215_262}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b03c/31ca/b2f77489a04654a3c3aef8077bf75257"
              }}
              style={styles.ImageBackground_215_263}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d91/051d/03dcefeddf719654fd4deda3f58f3525"
              }}
              style={styles.ImageBackground_215_264}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c365/803e/7f22bf9f48ce0870d83c753f9b7c0d87"
              }}
              style={styles.ImageBackground_215_265}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92c9/adf2/c4893eb434120f06911702e73c1d6b03"
              }}
              style={styles.ImageBackground_215_266}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48f9/13e4/7b6f0cb01ffa319b917c2c990a0f99af"
              }}
              style={styles.ImageBackground_215_267}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48f9/13e4/7b6f0cb01ffa319b917c2c990a0f99af"
              }}
              style={styles.ImageBackground_215_268}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae98/6f33/b02ea7da728cdbf2af3ff717fc92a9b1"
              }}
              style={styles.ImageBackground_215_269}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d166/f51b/8ec36baff3ce3781c08fb9e4470ee288"
              }}
              style={styles.ImageBackground_215_270}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/961d/3294/f3504be98fed4723f774df106362a97a"
              }}
              style={styles.ImageBackground_215_271}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4093/caf3/0ec5acef8c6edff6150b65564008d6e9"
              }}
              style={styles.ImageBackground_215_272}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d260/4b04/6c53dc4aff511fd1f77cf8dee490bef5"
              }}
              style={styles.ImageBackground_215_273}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f57d/b795/ace13a5e71e611fba9b9721fc278937b"
              }}
              style={styles.ImageBackground_215_274}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53ff/d789/309ca25f4b776f419901e00889ca8f9e"
              }}
              style={styles.ImageBackground_215_275}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34dd/dacb/cb44b013cdf6839078b485e4b354ab49"
              }}
              style={styles.ImageBackground_215_276}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e422/3b06/6a704edd16a8edff16f5b07de2f6e29a"
              }}
              style={styles.ImageBackground_215_277}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/878a/db03/5d64383dd1644569a465a387e5c60bad"
              }}
              style={styles.ImageBackground_215_278}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f374/b34f/2a1a70b334b340f816183a5675aa7437"
              }}
              style={styles.ImageBackground_215_279}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a645/03ed/b65e63b0d1ae12a3d5ea5afa63450d8e"
              }}
              style={styles.ImageBackground_215_280}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a6f/b359/df75a2208c644430ab0f75b78ba72600"
              }}
              style={styles.ImageBackground_215_281}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/08b2/0668/c71d8112a54e7d2b06b348db3ecb31f8"
              }}
              style={styles.ImageBackground_215_282}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ec1/5956/fe30aad01e3aadf0e47c6ff3fb95412c"
              }}
              style={styles.ImageBackground_215_283}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e996/9ce9/e5f64a75d300c7e7fdd744b96d6a76b5"
              }}
              style={styles.ImageBackground_215_284}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ae7/60b4/d2702980edcd0366831a5f31341c2aca"
              }}
              style={styles.ImageBackground_215_285}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5e9/dde9/afcd10dd8ec221703e775aefadc3e0d0"
              }}
              style={styles.ImageBackground_215_286}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17f3/3bd8/a069c8cb939191d8075361733877f093"
              }}
              style={styles.ImageBackground_215_287}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/666b/df60/99604d117cfed2ba438829f37bf66d35"
              }}
              style={styles.ImageBackground_215_288}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21a4/4d5a/752ec79ec815dc2e50240a4061d284fa"
              }}
              style={styles.ImageBackground_215_289}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4533/5d40/297f53bb83377710b206023e8a76278a"
              }}
              style={styles.ImageBackground_215_290}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e715/a1b9/47e316134b9cf7940545b1b66521feec"
              }}
              style={styles.ImageBackground_215_291}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa6b/6f75/f9ed35c8381801dbaae2aa0a6997f58f"
              }}
              style={styles.ImageBackground_215_292}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78be/4e6e/4a75ba15e5b964900b5e48370430714f"
              }}
              style={styles.ImageBackground_215_293}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e16/1868/9ff13d70c150cffb4c201bb779837b9d"
              }}
              style={styles.ImageBackground_215_294}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9134/99ac/1e86e5bf922b8a885e5e02897c7eb0a7"
              }}
              style={styles.ImageBackground_215_295}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43e4/957d/e72e309e442ee2f95432a257b2676e9d"
              }}
              style={styles.ImageBackground_215_296}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a44b/f8b2/3a8b4c74d535c5aa4f18bdfdf67ed50a"
              }}
              style={styles.ImageBackground_215_297}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5320/43ad/b3a754548904bb32affba1625e606e58"
              }}
              style={styles.ImageBackground_215_298}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bbc/3193/ac03b56004c61bf8f2d19b5ca1641aac"
              }}
              style={styles.ImageBackground_215_299}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e6c/60f0/44e518b4e41f1a9a9b8797f9c3a61fbc"
              }}
              style={styles.ImageBackground_215_300}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7633/c210/525e5355241497e7dd2fb5f5305f68e3"
              }}
              style={styles.ImageBackground_215_301}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1e4/ca0a/c1b9a13cf68d14e484e069e12ed2b73e"
              }}
              style={styles.ImageBackground_215_302}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58a5/7cb0/7e3221eb188d19222f4773a110aa3323"
              }}
              style={styles.ImageBackground_215_303}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf7b/bccd/9d3afef99e824be7d3009ddbbf2649ec"
              }}
              style={styles.ImageBackground_215_304}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e422/3b06/6a704edd16a8edff16f5b07de2f6e29a"
              }}
              style={styles.ImageBackground_215_305}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/878a/db03/5d64383dd1644569a465a387e5c60bad"
              }}
              style={styles.ImageBackground_215_306}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a645/03ed/b65e63b0d1ae12a3d5ea5afa63450d8e"
              }}
              style={styles.ImageBackground_215_307}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a6f/b359/df75a2208c644430ab0f75b78ba72600"
              }}
              style={styles.ImageBackground_215_308}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/08b2/0668/c71d8112a54e7d2b06b348db3ecb31f8"
              }}
              style={styles.ImageBackground_215_309}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ceb6/7314/8649384f4d81845a20b9879937749b0d"
              }}
              style={styles.ImageBackground_215_310}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e996/9ce9/e5f64a75d300c7e7fdd744b96d6a76b5"
              }}
              style={styles.ImageBackground_215_311}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ae7/60b4/d2702980edcd0366831a5f31341c2aca"
              }}
              style={styles.ImageBackground_215_312}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f374/b34f/2a1a70b334b340f816183a5675aa7437"
              }}
              style={styles.ImageBackground_215_313}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5e9/dde9/afcd10dd8ec221703e775aefadc3e0d0"
              }}
              style={styles.ImageBackground_215_314}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17f3/3bd8/a069c8cb939191d8075361733877f093"
              }}
              style={styles.ImageBackground_215_315}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ff4/1a1d/7981af108afb98c49ffd4e719fba33d5"
              }}
              style={styles.ImageBackground_215_316}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4533/5d40/297f53bb83377710b206023e8a76278a"
              }}
              style={styles.ImageBackground_215_317}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e715/a1b9/47e316134b9cf7940545b1b66521feec"
              }}
              style={styles.ImageBackground_215_318}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa6b/6f75/f9ed35c8381801dbaae2aa0a6997f58f"
              }}
              style={styles.ImageBackground_215_319}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e422/3b06/6a704edd16a8edff16f5b07de2f6e29a"
              }}
              style={styles.ImageBackground_215_320}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/878a/db03/5d64383dd1644569a465a387e5c60bad"
              }}
              style={styles.ImageBackground_215_321}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a645/03ed/b65e63b0d1ae12a3d5ea5afa63450d8e"
              }}
              style={styles.ImageBackground_215_322}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a6f/b359/df75a2208c644430ab0f75b78ba72600"
              }}
              style={styles.ImageBackground_215_323}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2008/dbf0/1a24e47932e1e3390356a756d490f9af"
              }}
              style={styles.ImageBackground_215_324}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ceb6/7314/8649384f4d81845a20b9879937749b0d"
              }}
              style={styles.ImageBackground_215_325}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e996/9ce9/e5f64a75d300c7e7fdd744b96d6a76b5"
              }}
              style={styles.ImageBackground_215_326}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14fb/e5f4/e04ddf0e53fe8fd75eeda7d757a2abe0"
              }}
              style={styles.ImageBackground_215_327}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f374/b34f/2a1a70b334b340f816183a5675aa7437"
              }}
              style={styles.ImageBackground_215_328}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5e9/dde9/afcd10dd8ec221703e775aefadc3e0d0"
              }}
              style={styles.ImageBackground_215_329}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17f3/3bd8/a069c8cb939191d8075361733877f093"
              }}
              style={styles.ImageBackground_215_330}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ff4/1a1d/7981af108afb98c49ffd4e719fba33d5"
              }}
              style={styles.ImageBackground_215_331}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/15da/08a7/e0c894f2941c8960b7b3c3c2ee9c2778"
              }}
              style={styles.ImageBackground_215_332}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9230/d05f/d57ff282d961c6c06fdcd27dc97dd24d"
              }}
              style={styles.ImageBackground_215_333}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d80/e550/4375bbb5f4ef9940771497dbe4c3acdc"
              }}
              style={styles.ImageBackground_215_334}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d248/198e/27da03103e46b78d8ba633b41e3934dd"
              }}
              style={styles.ImageBackground_215_335}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1533/00b4/e6869d75007c6037eb69bbdb81e4c76d"
              }}
              style={styles.ImageBackground_215_336}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46b0/1b4d/70074a7d079f9b6aea85bf0c2ae7f7ae"
              }}
              style={styles.ImageBackground_215_337}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16e6/1b79/dfbc393ab32be67a3ff31d1e3b6e93a9"
              }}
              style={styles.ImageBackground_215_338}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16e6/1b79/dfbc393ab32be67a3ff31d1e3b6e93a9"
              }}
              style={styles.ImageBackground_215_339}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc4e/07e2/e7be87173ecdaf72783699e3c768e063"
              }}
              style={styles.ImageBackground_215_340}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d24/84ff/534a1d2658212f6482c73d7951f3e867"
              }}
              style={styles.ImageBackground_215_341}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc81/e365/0381772436f25ad87cea9bedce8b9741"
              }}
              style={styles.ImageBackground_215_342}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e487/2c7b/ff077669ba685b0fdb3a1770feea7f4f"
              }}
              style={styles.ImageBackground_215_343}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/062e/f80b/7197b304e7aa18be8e2ca70c85e177db"
              }}
              style={styles.ImageBackground_215_344}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e92/2a03/ca9b17d659dd5d08d3f9f43c0374fbb6"
              }}
              style={styles.ImageBackground_215_345}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b50f/f4c6/039bd81f592aad051bba6eee455ef5db"
              }}
              style={styles.ImageBackground_215_346}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4533/5d40/297f53bb83377710b206023e8a76278a"
              }}
              style={styles.ImageBackground_215_347}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e715/a1b9/47e316134b9cf7940545b1b66521feec"
              }}
              style={styles.ImageBackground_215_348}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa6b/6f75/f9ed35c8381801dbaae2aa0a6997f58f"
              }}
              style={styles.ImageBackground_215_349}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50e8/5998/daf7c21922950e7120c92e5b3e214c05"
              }}
              style={styles.ImageBackground_215_350}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2948/11db/b8aa8765f6380b999f1c77298940aa42"
              }}
              style={styles.ImageBackground_215_351}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd0f/02d7/daae2232809e5c6573b582199514abfa"
              }}
              style={styles.ImageBackground_215_352}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34dd/dacb/cb44b013cdf6839078b485e4b354ab49"
              }}
              style={styles.ImageBackground_215_353}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db56/0cb2/78f3fcf50f742b5db95902f08bde8789"
              }}
              style={styles.ImageBackground_215_354}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f57d/b795/ace13a5e71e611fba9b9721fc278937b"
              }}
              style={styles.ImageBackground_215_355}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53ff/d789/309ca25f4b776f419901e00889ca8f9e"
              }}
              style={styles.ImageBackground_215_356}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa7a/5c5e/7a913625d168eaa2de394b8b935cc177"
              }}
              style={styles.ImageBackground_215_357}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/320d/0d0e/b7fbc3712f82d8b69e74ee5f51fc7568"
              }}
              style={styles.ImageBackground_215_358}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95bb/5465/baeb310b5ccd4769b6a803f37b20cc90"
            }}
            style={styles.ImageBackground_216_0}
          />
        </View>
        <View style={styles.View_224_1}>
          <View style={styles.View_182_10}>
            <View style={styles.View_182_1}>
              <Text style={styles.Text_182_1}>Our Plugins</Text>
            </View>
            <View style={styles.View_182_2}>
              <Text style={styles.Text_182_2}>WP VR</Text>
            </View>
            <View style={styles.View_182_5}>
              <Text style={styles.Text_182_5}>WP Funnels</Text>
            </View>
            <View style={styles.View_182_7}>
              <Text style={styles.Text_182_7}>Variation Swatches</Text>
            </View>
            <View style={styles.View_182_4}>
              <Text style={styles.Text_182_4}>Product Feed</Text>
            </View>
            <View style={styles.View_182_6}>
              <Text style={styles.Text_182_6}>Cart Lift</Text>
            </View>
            <View style={styles.View_182_8}>
              <Text style={styles.Text_182_8}>Media Storage to Cloud</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e70/966e/1a2518d9fa92f7a76aad8607bc79dac6"
              }}
              style={styles.ImageBackground_188_8}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af3f/7e68/05c8dfd869e14c961f55054cfdbbd404"
              }}
              style={styles.ImageBackground_188_33}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f473/c899/bdb8a797803c6134935f321aa99ca28f"
              }}
              style={styles.ImageBackground_188_46}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de64/ace4/04cf6a4f4bb603d0d2e0c3a485386d16"
              }}
              style={styles.ImageBackground_188_50}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ec4/a5d2/829dd428ea0bbc787f1eb09964386b5d"
              }}
              style={styles.ImageBackground_188_108}
            />
            <View style={styles.View_188_123}>
              <View style={styles.View_188_124}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e24f/f3be/781df76581a1738256b452cd46d6ce09"
                  }}
                  style={styles.ImageBackground_188_125}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37b6/86b7/84e84b9ca08ff89168378ee342ecb809"
                  }}
                  style={styles.ImageBackground_188_126}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6271/7507/bda52466a47bdf4f76f613abfd5e5cb7"
                  }}
                  style={styles.ImageBackground_188_129}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_182_11}>
            <View style={styles.View_182_12}>
              <Text style={styles.Text_182_12}>Resources</Text>
            </View>
            <View style={styles.View_182_13}>
              <Text style={styles.Text_182_13}>Privacy Policy</Text>
            </View>
            <View style={styles.View_182_14}>
              <Text style={styles.Text_182_14}>Affiliate Program</Text>
            </View>
            <View style={styles.View_182_16}>
              <Text style={styles.Text_182_16}>Terms of Service</Text>
            </View>
            <View style={styles.View_182_17}>
              <Text style={styles.Text_182_17}>Contact Us</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e279/8f73/c5ca61edfcc056eebaad29163f613859"
              }}
              style={styles.ImageBackground_188_139}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9957/bc68/2abba736f243c940770aaa499eb59043"
              }}
              style={styles.ImageBackground_188_140}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e279/8f73/c5ca61edfcc056eebaad29163f613859"
              }}
              style={styles.ImageBackground_188_141}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e279/8f73/c5ca61edfcc056eebaad29163f613859"
              }}
              style={styles.ImageBackground_188_142}
            />
          </View>
          <View style={styles.View_191_13}>
            <View style={styles.View_182_20}>
              <Text style={styles.Text_182_20}>Payment Methods</Text>
            </View>
            <View style={styles.View_189_518}>
              <View style={styles.View_189_519} />
              <View style={styles.View_191_9} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/959e/2619/63f891275f2e551eb7f97dcf7dcc223c"
                }}
                style={styles.ImageBackground_189_516}
              />
            </View>
            <View style={styles.View_189_520}>
              <View style={styles.View_191_0} />
              <View style={styles.View_191_8} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10e0/15fe/63e48fe2bfa0f24eb84668ef8370714d"
                }}
                style={styles.ImageBackground_189_515}
              />
            </View>
            <View style={styles.View_191_1}>
              <View style={styles.View_191_2} />
              <View style={styles.View_191_7} />
              <View style={styles.View_189_514}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0549/91b0/9de5e5abfa48cd91206146578e4f048b"
                  }}
                  style={styles.ImageBackground_189_18}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b3b/095d/1f411e35825c21a03e2f0eadb37e4ac7"
                  }}
                  style={styles.ImageBackground_189_20}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00c0/feed/3830a40b1479f2be34febd274533aa4d"
                  }}
                  style={styles.ImageBackground_189_21}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c505/a8ef/9897f6a95c1d27ffce9caf0b3e9e3320"
                  }}
                  style={styles.ImageBackground_189_22}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bae3/cf7b/004442ac44537524aa1cc3664e197977"
                  }}
                  style={styles.ImageBackground_189_23}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/393f/c1ff/4f5f1294ea7eecd0f16dab01cd6f068a"
                  }}
                  style={styles.ImageBackground_189_24}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13f2/4b03/c294adedbf7a15983544b79b1ed2a1dc"
                  }}
                  style={styles.ImageBackground_189_25}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c93c/db32/cdabe43d29e196a7a58acc4cb63114c7"
                  }}
                  style={styles.ImageBackground_189_26}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a17/3ab6/9a585da5dda1668d8f9b32ca009b30c4"
                  }}
                  style={styles.ImageBackground_189_27}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a7e/c941/497e08118d1219b097cc886e3c967854"
                  }}
                  style={styles.ImageBackground_189_28}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca83/7711/821a2d1faf5073b0b1f377f529c25ab1"
                  }}
                  style={styles.ImageBackground_189_30}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
                  }}
                  style={styles.ImageBackground_189_435}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3d6/27c6/966bf7c7e68ff31d9d92d5a794059b39"
                  }}
                  style={styles.ImageBackground_189_436}
                />
              </View>
            </View>
            <View style={styles.View_191_3}>
              <View style={styles.View_191_4} />
              <View style={styles.View_191_5} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/012d/9f6d/474020314a5f2d9d5676f50d8fd0dd55"
                }}
                style={styles.ImageBackground_189_513}
              />
            </View>
            <View style={styles.View_191_11}>
              <View style={styles.View_189_517} />
              <View style={styles.View_191_6} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45ee/8e26/de539e90d8c3710513962f6f05f37e04"
                }}
                style={styles.ImageBackground_189_512}
              />
            </View>
          </View>
          <View style={styles.View_206_3}>
            <View style={styles.View_163_16}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9ec/ffe9/8ac2e1667b28ea65f0dfdfd09fea1402"
                }}
                style={styles.ImageBackground_163_17}
              />
            </View>
            <View style={styles.View_191_14}>
              <View style={styles.View_188_155} />
              <View style={styles.View_188_157} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fb0/3483/9fe15692b0fcf2f021476af60bd0a93b"
                }}
                style={styles.ImageBackground_204_0}
              />
              <View style={styles.View_188_156}>
                <Text style={styles.Text_188_156}>Enter you email</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7122/0bb9/1abd96b688d9aaffb0133d3c9bf1d6a1"
                }}
                style={styles.ImageBackground_188_159}
              />
            </View>
            <View style={styles.View_191_17}>
              <View style={styles.View_191_15} />
              <View style={styles.View_191_16}>
                <Text style={styles.Text_191_16}></Text>
              </View>
            </View>
            <View style={styles.View_191_21}>
              <View style={styles.View_191_22} />
              <View style={styles.View_191_23}>
                <Text style={styles.Text_191_23}>youtube</Text>
              </View>
            </View>
            <View style={styles.View_191_24}>
              <View style={styles.View_191_25} />
              <View style={styles.View_191_26}>
                <Text style={styles.Text_191_26}>wordpress</Text>
              </View>
            </View>
            <View style={styles.View_191_18}>
              <View style={styles.View_191_19} />
              <View style={styles.View_191_20}>
                <Text style={styles.Text_191_20}>twitter</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_224_2}>
          <View style={styles.View_198_8} />
          <View style={styles.View_198_9}>
            <Text style={styles.Text_198_9}>
              © 2021. All rights reserved by RexTheme
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_163_11}>
        <View style={styles.View_163_10}>
          <View style={styles.View_163_0} />
          <View style={styles.View_162_118}>
            <View style={styles.View_162_112} />
            <View style={styles.View_162_113}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3294/0be0/adf671183dc6d9535dc0384c0852829d"
                }}
                style={styles.ImageBackground_162_114}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4034/7792/018f2e76f555160c826957c1b52a6def"
                }}
                style={styles.ImageBackground_162_115}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/87cc/aa61/839dbf2420bb5694a2e082ab1e57388f"
                }}
                style={styles.ImageBackground_162_116}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/328a/9c14/89afc82768eb5a18f3b1c95f317bd25b"
                }}
                style={styles.ImageBackground_162_117}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47d7/ba27/71da03745bccffc7a13290f251576327"
            }}
            style={styles.ImageBackground_162_120}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f78/3c0c/8758e8f112b44a8a3011056d6deacaed"
            }}
            style={styles.ImageBackground_163_5}
          />
        </View>
        <View style={styles.View_163_9}>
          <View style={styles.View_162_119}>
            <Text style={styles.Text_162_119}>
              Have a question? Feel free to drop us a line.
            </Text>
          </View>
          <View style={styles.View_163_1}>
            <View style={styles.View_163_2} />
            <View style={styles.View_163_3}>
              <Text style={styles.Text_163_3}>Contact Us</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_224_0}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0d0/de8d/9f7b3db10acf43bbf05f3dc44b914906"
            }}
            style={styles.ImageBackground_223_148}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99de/233e/ab4d456c5d505261094ec44149aeac1c"
            }}
            style={styles.ImageBackground_223_149}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3b5/b070/81125fe35f4a79483b8fbbeadf426fe3"
            }}
            style={styles.ImageBackground_225_0}
          />
        </View>
      </View>
      <View style={styles.View_163_12}>
        <View style={styles.View_227_3}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9ea/b0cc/831523fa81008dec9310690048fb9188"
            }}
            style={styles.ImageBackground_227_1}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6335/ad1c/1441f6e16583c4b873ecba2cb0ab79ea"
            }}
            style={styles.ImageBackground_143_61}
          />
        </View>
        <View style={styles.View_145_4}>
          <View style={styles.View_143_66} />
          <View style={styles.View_144_2}>
            <View style={styles.View_144_3}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e951/584e/8384c6fdf134f55cf7104ad6b061aafa"
                }}
                style={styles.ImageBackground_144_4}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e951/584e/8384c6fdf134f55cf7104ad6b061aafa"
                }}
                style={styles.ImageBackground_144_5}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/68bc/ba70/38da108768fa4afe5170d13103d6ab9f"
                }}
                style={styles.ImageBackground_144_6}
              />
            </View>
            <View style={styles.View_144_7}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f8d/8228/50029075a953e1003510e52d7d0643ab"
                }}
                style={styles.ImageBackground_144_8}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f8d/8228/50029075a953e1003510e52d7d0643ab"
                }}
                style={styles.ImageBackground_144_9}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4d5/2eb1/76e0ee1cc3ac3c8d84361cf566a8e035"
                }}
                style={styles.ImageBackground_144_10}
              />
            </View>
            <View style={styles.View_144_11}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9b9/7804/0ccc2f5b5bb99f4a4f489fce0a0bb307"
                }}
                style={styles.ImageBackground_144_12}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9b9/7804/0ccc2f5b5bb99f4a4f489fce0a0bb307"
                }}
                style={styles.ImageBackground_144_13}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4d5/2eb1/76e0ee1cc3ac3c8d84361cf566a8e035"
                }}
                style={styles.ImageBackground_144_14}
              />
            </View>
          </View>
          <View style={styles.View_145_0}>
            <Text style={styles.Text_145_0}>6+</Text>
          </View>
          <View style={styles.View_145_1}>
            <Text style={styles.Text_145_1}>Amazing Products</Text>
          </View>
        </View>
        <View style={styles.View_145_5}>
          <View style={styles.View_145_6} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c5f/a436/e26a888038771945f48a4d8f2fe85919"
            }}
            style={styles.ImageBackground_165_1}
          />
          <View style={styles.View_145_8}>
            <Text style={styles.Text_145_8}>14K+</Text>
          </View>
          <View style={styles.View_145_9}>
            <Text style={styles.Text_145_9}>Happy Users</Text>
          </View>
        </View>
        <View style={styles.View_145_22}>
          <View style={styles.View_145_23} />
          <View style={styles.View_145_25}>
            <Text style={styles.Text_145_25}>230K+</Text>
          </View>
          <View style={styles.View_145_26}>
            <Text style={styles.Text_145_26}>Product Downloads</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5656/5277/5a5b7f658434c7f7c54fd394fecc620c"
            }}
            style={styles.ImageBackground_198_0}
          />
        </View>
        <View style={styles.View_145_39}>
          <View style={styles.View_145_40} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1ea/b5a3/4d3b439c0b33f5c9159a3e25798c6f17"
            }}
            style={styles.ImageBackground_165_16}
          />
          <View style={styles.View_145_42}>
            <Text style={styles.Text_145_42}>18+</Text>
          </View>
          <View style={styles.View_145_43}>
            <Text style={styles.Text_145_43}>Team Members</Text>
          </View>
        </View>
        <View style={styles.View_149_7}>
          <Text style={styles.Text_149_7}>RexTheme’s Facts</Text>
        </View>
      </View>
      <View style={styles.View_162_111}>
        <View style={styles.View_158_34}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2ec/b3c1/009a21f8aa877d7f83bf508ca76fad60"
            }}
            style={styles.ImageBackground_158_26}
          />
          <View style={styles.View_158_5}>
            <View style={styles.View_158_32}>
              <View style={styles.View_158_0} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b3d/cfd8/0b9c19690da08692addb7dc5bc56583d"
                }}
                style={styles.ImageBackground_158_31}
              />
            </View>
            <View style={styles.View_158_1}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fffc/d72e/356d42ec610bbb3104de423cfac942a7"
                }}
                style={styles.ImageBackground_158_2}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd11/7f5f/499f9747b14bee4a20e969edb449358c"
                }}
                style={styles.ImageBackground_158_3}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bebe/46a5/1489fafeb416b57dc57b901917b7b688"
                }}
                style={styles.ImageBackground_158_6}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efd8/0139/72fff749edac6e3a31bfa4fe3ccd3807"
                }}
                style={styles.ImageBackground_158_4}
              />
            </View>
          </View>
          <View style={styles.View_158_7} />
          <View style={styles.View_158_11}>
            <Text style={styles.Text_158_11}>
              “Really well developed VR plugin and a plugin that does exactly
              what is supposed to do (that’s not to be taken for granted). I had
              some issues with my caching plugin but the developers did their
              best to help me out and it works perfectly fine now.”
            </Text>
          </View>
          <View style={styles.View_158_12}>
            <Text style={styles.Text_158_12}>Kim Kuhlman</Text>
          </View>
          <View style={styles.View_158_20}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ccd9/6051/53ce51d10df70205b0a17b64d300d4c5"
              }}
              style={styles.ImageBackground_158_13}
            />
            <View style={styles.View_158_16}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4493/1bfe/05042b75b46926dfc558ab9c2967d76f"
                }}
                style={styles.ImageBackground_158_18}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd6c/31da/b61eecd46061a94d90ba8e3ef1321145"
                }}
                style={styles.ImageBackground_158_19}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5351/15ad/41620bdbd97a174108eeb5c38dae1c5a"
            }}
            style={styles.ImageBackground_158_24}
          />
        </View>
        <View style={styles.View_158_36}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2ec/b3c1/009a21f8aa877d7f83bf508ca76fad60"
            }}
            style={styles.ImageBackground_158_37}
          />
          <View style={styles.View_158_38}>
            <View style={styles.View_158_39}>
              <View style={styles.View_158_40} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b3d/cfd8/0b9c19690da08692addb7dc5bc56583d"
                }}
                style={styles.ImageBackground_158_41}
              />
            </View>
            <View style={styles.View_158_42}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b206/10d6/cdd800242c14185079e156c805589886"
                }}
                style={styles.ImageBackground_158_43}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aebe/9709/dc98add75b2321223dae6654e2e60251"
                }}
                style={styles.ImageBackground_158_44}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d546/f6b9/0260e9694ea5ed8a898221e5db39e87d"
                }}
                style={styles.ImageBackground_158_45}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efd8/0139/72fff749edac6e3a31bfa4fe3ccd3807"
                }}
                style={styles.ImageBackground_158_46}
              />
            </View>
          </View>
          <View style={styles.View_158_47} />
          <View style={styles.View_158_48}>
            <Text style={styles.Text_158_48}>
              “Really well developed VR plugin and a plugin that does exactly
              what is supposed to do (that’s not to be taken for granted). I had
              some issues with my caching plugin but the developers did their
              best to help me out and it works perfectly fine now.”
            </Text>
          </View>
          <View style={styles.View_158_49}>
            <Text style={styles.Text_158_49}>Elite-Creativeo</Text>
          </View>
          <View style={styles.View_158_50}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ccd9/6051/53ce51d10df70205b0a17b64d300d4c5"
              }}
              style={styles.ImageBackground_158_51}
            />
            <View style={styles.View_158_52}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b34/f79e/b99f38ba4057b565e6fb10b805ef225b"
                }}
                style={styles.ImageBackground_158_54}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd6c/31da/b61eecd46061a94d90ba8e3ef1321145"
                }}
                style={styles.ImageBackground_158_55}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5351/15ad/41620bdbd97a174108eeb5c38dae1c5a"
            }}
            style={styles.ImageBackground_158_56}
          />
        </View>
        <View style={styles.View_206_11} />
        <View style={styles.View_162_94}>
          <Text style={styles.Text_162_94}>What Our Users Say About Us</Text>
        </View>
        <View style={styles.View_162_109}>
          <View style={styles.View_162_102} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ccb/d0a4/149d772b6174c7cad77e3ec01d984e5a"
            }}
            style={styles.ImageBackground_162_105}
          />
        </View>
        <View style={styles.View_162_110}>
          <View style={styles.View_162_100} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52f8/462a/44d50fa0c257bd39eeaee1dbb4746296"
            }}
            style={styles.ImageBackground_162_103}
          />
        </View>
      </View>
      <View style={styles.View_139_64}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10aa/3dde/4cdc9d7e735325a7899c93cc7b64d8e1"
          }}
          style={styles.ImageBackground_127_1}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a88d/b745/7758d523afd47b691a916554f45e3f37"
          }}
          style={styles.ImageBackground_139_58}
        />
        <View style={styles.View_133_230}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51dd/a265/572a8af83ffc6a8ea587ca4d529c0f61"
            }}
            style={styles.ImageBackground_214_30}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fda3/bc95/30b5870dd35bd61f1f10a784a6b0e9b5"
            }}
            style={styles.ImageBackground_133_233}
          />
        </View>
        <View style={styles.View_132_16}>
          <View style={styles.View_120_57}>
            <Text style={styles.Text_120_57}>Our Awesome Features</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7308/d2d1/e8ff30238e349d24dc2373cdce04c9b1"
            }}
            style={styles.ImageBackground_128_6}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7308/d2d1/e8ff30238e349d24dc2373cdce04c9b1"
            }}
            style={styles.ImageBackground_197_3}
          />
        </View>
        <View style={styles.View_132_17}>
          <View style={styles.View_128_7} />
          <View style={styles.View_128_8} />
          <View style={styles.View_132_15}>
            <View style={styles.View_128_9}>
              <Text style={styles.Text_128_9}>Elite Unmatched Support</Text>
            </View>
            <View style={styles.View_131_0}>
              <Text style={styles.Text_131_0}>
                Our experienced support teams are always willing to help you
                with any sort of assistance you need with our WordPress plugins.
              </Text>
            </View>
          </View>
          <View style={styles.View_132_134}>
            <View style={styles.View_132_135}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84f8/e114/1628fe4ffaa52128e8120a35d5b979b6"
                }}
                style={styles.ImageBackground_132_136}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84f8/e114/1628fe4ffaa52128e8120a35d5b979b6"
                }}
                style={styles.ImageBackground_132_137}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de1e/2850/8796f3527de8e474ecb16dba8c41ba1c"
                }}
                style={styles.ImageBackground_132_138}
              />
            </View>
            <View style={styles.View_132_139}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dbba/eaaa/ce6c3601d7f6d2ab16c281b5ff6fa708"
                }}
                style={styles.ImageBackground_132_140}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dbba/eaaa/ce6c3601d7f6d2ab16c281b5ff6fa708"
                }}
                style={styles.ImageBackground_132_141}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d41/1215/41082fc1938c9da4e2a8a75af6b9e9ba"
                }}
                style={styles.ImageBackground_132_142}
              />
            </View>
            <View style={styles.View_132_143}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a166/d58f/80ec7cec91fee3a0f2f57487131e83cc"
                }}
                style={styles.ImageBackground_132_144}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a166/d58f/80ec7cec91fee3a0f2f57487131e83cc"
                }}
                style={styles.ImageBackground_132_145}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de1e/2850/8796f3527de8e474ecb16dba8c41ba1c"
                }}
                style={styles.ImageBackground_132_146}
              />
            </View>
            <View style={styles.View_132_147}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56c0/1268/4089addc71b1cdb8eefc2bd11a6a02f6"
                }}
                style={styles.ImageBackground_132_148}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56c0/1268/4089addc71b1cdb8eefc2bd11a6a02f6"
                }}
                style={styles.ImageBackground_132_149}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbe3/f435/42568c8f7d3f6deca896365aa6ec849d"
                }}
                style={styles.ImageBackground_132_150}
              />
            </View>
            <View style={styles.View_132_151}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e793/17e0/ed81457736200bb09de53404ab1910e8"
                }}
                style={styles.ImageBackground_132_152}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e793/17e0/ed81457736200bb09de53404ab1910e8"
                }}
                style={styles.ImageBackground_132_153}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25e5/12ae/45fc808cd2f00e3562233fa8449ad272"
                }}
                style={styles.ImageBackground_132_154}
              />
            </View>
            <View style={styles.View_132_155}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f064/8688/cfd38ad3b6aba84fe80a77f5787210b7"
                }}
                style={styles.ImageBackground_132_156}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f064/8688/cfd38ad3b6aba84fe80a77f5787210b7"
                }}
                style={styles.ImageBackground_132_157}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cad/f953/7b18e087228cbe4d97c2336e6b80175b"
                }}
                style={styles.ImageBackground_132_158}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_132_55}>
          <View style={styles.View_132_56} />
          <View style={styles.View_132_57} />
          <View style={styles.View_132_58}>
            <View style={styles.View_132_59}>
              <Text style={styles.Text_132_59}>Money Back Guarantee</Text>
            </View>
            <View style={styles.View_132_60}>
              <Text style={styles.Text_132_60}>
                Our experienced support teams are always willing to help you
                with any sort of assistance you need with our WordPress plugins.
              </Text>
            </View>
          </View>
          <View style={styles.View_133_238}>
            <View style={styles.View_133_239}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9581/3fe2/e35723cb9b67bc4fc7061376041952dc"
                }}
                style={styles.ImageBackground_133_240}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9581/3fe2/e35723cb9b67bc4fc7061376041952dc"
                }}
                style={styles.ImageBackground_133_241}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e86/c533/b9351592d4a06f830bced84ef17d7857"
                }}
                style={styles.ImageBackground_133_242}
              />
            </View>
            <View style={styles.View_133_243}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/338d/4751/0735c0464faa4d13b7f356cd651c167b"
                }}
                style={styles.ImageBackground_133_244}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/338d/4751/0735c0464faa4d13b7f356cd651c167b"
                }}
                style={styles.ImageBackground_133_245}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e23/4216/808345dd5ec9aff11b55b631da26c11e"
                }}
                style={styles.ImageBackground_133_246}
              />
            </View>
            <View style={styles.View_133_247}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0d9/2720/1114f9e63c5987550581d3f6eb1e476d"
                }}
                style={styles.ImageBackground_133_248}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0d9/2720/1114f9e63c5987550581d3f6eb1e476d"
                }}
                style={styles.ImageBackground_133_249}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e86/c533/b9351592d4a06f830bced84ef17d7857"
                }}
                style={styles.ImageBackground_133_250}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_132_18}>
          <View style={styles.View_132_19} />
          <View style={styles.View_132_20} />
          <View style={styles.View_132_21}>
            <View style={styles.View_132_22}>
              <Text style={styles.Text_132_22}>Best Simple Pricing Plan</Text>
            </View>
            <View style={styles.View_132_23}>
              <Text style={styles.Text_132_23}>
                Our experienced support teams are always willing to help you
                with any sort of assistance you need with our WordPress plugins.
              </Text>
            </View>
          </View>
          <View style={styles.View_132_24}>
            <View style={styles.View_132_25}>
              <View style={styles.View_I132_25_131_7}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1d8/3c86/57045104898642441dadcc3c11ff5098"
                  }}
                  style={styles.ImageBackground_I132_25_131_8}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1d8/3c86/57045104898642441dadcc3c11ff5098"
                  }}
                  style={styles.ImageBackground_I132_25_131_9}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97eb/db74/167648874ccefe469d4f98fffc199cc0"
                  }}
                  style={styles.ImageBackground_I132_25_131_10}
                />
              </View>
              <View style={styles.View_I132_25_131_11}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71e4/0b03/f5f20309072f28c8049d544b8f1b4ad7"
                  }}
                  style={styles.ImageBackground_I132_25_131_12}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71e4/0b03/f5f20309072f28c8049d544b8f1b4ad7"
                  }}
                  style={styles.ImageBackground_I132_25_131_13}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de1e/2850/8796f3527de8e474ecb16dba8c41ba1c"
                  }}
                  style={styles.ImageBackground_I132_25_131_14}
                />
              </View>
              <View style={styles.View_I132_25_131_15}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6578/0a2e/8ab1ad904c7b647a085fba879fe50631"
                  }}
                  style={styles.ImageBackground_I132_25_131_16}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6578/0a2e/8ab1ad904c7b647a085fba879fe50631"
                  }}
                  style={styles.ImageBackground_I132_25_131_17}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c894/d474/b3f2242f8c401ce74bcb81dcff200575"
                  }}
                  style={styles.ImageBackground_I132_25_131_18}
                />
              </View>
              <View style={styles.View_I132_25_131_19}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce61/4295/66ecbe6675bc030067f0332627ed3ec3"
                  }}
                  style={styles.ImageBackground_I132_25_131_20}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce61/4295/66ecbe6675bc030067f0332627ed3ec3"
                  }}
                  style={styles.ImageBackground_I132_25_131_21}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6db1/0f6a/c8f00db4f3857787474139cf33f21550"
                  }}
                  style={styles.ImageBackground_I132_25_131_22}
                />
              </View>
              <View style={styles.View_I132_25_132_2}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ac4/49dc/35b09ddf3fd15992fd12e0fa6199a8e0"
                  }}
                  style={styles.ImageBackground_I132_25_132_3}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ac4/49dc/35b09ddf3fd15992fd12e0fa6199a8e0"
                  }}
                  style={styles.ImageBackground_I132_25_132_4}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/79d4/a218/6293f9d26a7cd625fbcc00816261d277"
                  }}
                  style={styles.ImageBackground_I132_25_132_5}
                />
              </View>
              <View style={styles.View_I132_25_132_6}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9828/c2f1/05c10ade42c6fffcca1d06c7e01aeac3"
                  }}
                  style={styles.ImageBackground_I132_25_132_7}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9828/c2f1/05c10ade42c6fffcca1d06c7e01aeac3"
                  }}
                  style={styles.ImageBackground_I132_25_132_8}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19af/1285/bf935513699e520e17735122b1d6a86e"
                  }}
                  style={styles.ImageBackground_I132_25_132_9}
                />
              </View>
              <View style={styles.View_I132_25_132_10}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c50/48ee/3c0420cd3b24860ea0daa92931836310"
                  }}
                  style={styles.ImageBackground_I132_25_132_11}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c50/48ee/3c0420cd3b24860ea0daa92931836310"
                  }}
                  style={styles.ImageBackground_I132_25_132_12}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ff5/2a14/f152bdfa92e4144fda3bde130fd3afe3"
                  }}
                  style={styles.ImageBackground_I132_25_132_13}
                />
              </View>
            </View>
            <View style={styles.View_132_26} />
          </View>
        </View>
        <View style={styles.View_132_64}>
          <View style={styles.View_132_65} />
          <View style={styles.View_132_66} />
          <View style={styles.View_132_67}>
            <View style={styles.View_132_68}>
              <Text style={styles.Text_132_68}>
                Regular Updates &amp; Bug fixes
              </Text>
            </View>
            <View style={styles.View_132_69}>
              <Text style={styles.Text_132_69}>
                Our experienced support teams are always willing to help you
                with any sort of assistance you need with our WordPress plugins.
              </Text>
            </View>
          </View>
          <View style={styles.View_132_70}>
            <View style={styles.View_197_7}>
              <View style={styles.View_197_8}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/116f/a8db/682dc206fb926aacb2e253b4619415e9"
                  }}
                  style={styles.ImageBackground_197_9}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/116f/a8db/682dc206fb926aacb2e253b4619415e9"
                  }}
                  style={styles.ImageBackground_197_10}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/676a/5ddf/10eca69dc74af3771b7f23decd824b83"
                  }}
                  style={styles.ImageBackground_197_11}
                />
              </View>
              <View style={styles.View_197_12}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/115e/9fca/8d84f9aadb47032f105eaf654b81addc"
                  }}
                  style={styles.ImageBackground_197_13}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/115e/9fca/8d84f9aadb47032f105eaf654b81addc"
                  }}
                  style={styles.ImageBackground_197_14}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/676a/5ddf/10eca69dc74af3771b7f23decd824b83"
                  }}
                  style={styles.ImageBackground_197_15}
                />
              </View>
              <View style={styles.View_197_16}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4696/85f3/a63cf08bfed11d34e8df22ce9321a675"
                  }}
                  style={styles.ImageBackground_197_17}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4696/85f3/a63cf08bfed11d34e8df22ce9321a675"
                  }}
                  style={styles.ImageBackground_197_18}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edba/c222/207d50d0c3317a863a74e03ef1f84098"
                  }}
                  style={styles.ImageBackground_197_19}
                />
              </View>
              <View style={styles.View_197_20}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9000/b80b/96ee47774de591dfebd141f8a7b0ea2e"
                  }}
                  style={styles.ImageBackground_197_21}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9000/b80b/96ee47774de591dfebd141f8a7b0ea2e"
                  }}
                  style={styles.ImageBackground_197_22}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/676a/5ddf/10eca69dc74af3771b7f23decd824b83"
                  }}
                  style={styles.ImageBackground_197_23}
                />
              </View>
            </View>
            <View style={styles.View_132_72} />
          </View>
        </View>
      </View>
      <View style={styles.View_123_97}>
        <View style={styles.View_123_49}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f07a/9c31/35deaf7e14fee80c2ed7357f7f188f4b"
            }}
            style={styles.ImageBackground_123_42}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c76/78f1/c556ffdf0777ad3652258bc029ec3731"
            }}
            style={styles.ImageBackground_123_45}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6225/bf14/3238d3e381519e3e5a130631822be6fe"
          }}
          style={styles.ImageBackground_128_5}
        />
        <View style={styles.View_112_1}>
          <Text style={styles.Text_112_1}>
            Scale up your business with reliable plugins
          </Text>
        </View>
        <View style={styles.View_118_15}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ed3/3e0e/e2b0cfa7c35fc1bc4722c8586ef29b28"
            }}
            style={styles.ImageBackground_118_10}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80c5/f547/6cf9ea0a74bfc46aeb9d3a68b0247d0e"
            }}
            style={styles.ImageBackground_118_13}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f8e/94cd/febef73b4079a40943744905ae6157a0"
            }}
            style={styles.ImageBackground_118_14}
          />
        </View>
        <View style={styles.View_119_48}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d86/b034/40fd69a3cfabdb432694381bd50cc9dc"
            }}
            style={styles.ImageBackground_119_49}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfde/dd8e/e286f5aca25c2a83b3e1ab2594517dba"
            }}
            style={styles.ImageBackground_119_50}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2008/ca58/aa097eb0bd9e001806336f866904e5fe"
            }}
            style={styles.ImageBackground_119_51}
          />
        </View>
        <View style={styles.View_119_11}>
          <View style={styles.View_114_2} />
          <View style={styles.View_119_7}>
            <View style={styles.View_119_2} />
            <View style={styles.View_119_3}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54fe/5ced/3ebf1a73b345ce2bf4d9b3e9b4f0a3e8"
                }}
                style={styles.ImageBackground_119_4}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cae/d7a1/c08dbbec3552ed301fd71e30d172531d"
                }}
                style={styles.ImageBackground_119_5}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7cf/94f6/ee539dd6474252af2ee307d7380f73c8"
                }}
                style={styles.ImageBackground_119_6}
              />
            </View>
          </View>
          <View style={styles.View_119_10}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2586/addd/5fe97f9d8ab7a589d5c16ad931492d9e"
              }}
              style={styles.ImageBackground_117_10}
            />
            <View style={styles.View_117_9}>
              <Text style={styles.Text_117_9}>View More</Text>
            </View>
          </View>
          <View style={styles.View_119_9}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3051/b663/bd4130ed7de9e00a07b1b8dd5ea2e8a6"
              }}
              style={styles.ImageBackground_117_2}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc6e/2fe2/0ad2813cb4733e40fbfe22c8b985b8e6"
              }}
              style={styles.ImageBackground_118_21}
            />
          </View>
          <View style={styles.View_119_8}>
            <View style={styles.View_117_3}>
              <Text style={styles.Text_117_3}>Product Feed Manager</Text>
            </View>
            <View style={styles.View_117_8}>
              <Text style={styles.Text_117_8}>
                Generate flawless product feed for large marketplaces such as
                Google Shopping, Facebook Ads, eBay, etc and increase sales.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_120_2}>
          <View style={styles.View_120_3} />
          <View style={styles.View_120_4}>
            <View style={styles.View_120_5} />
            <View style={styles.View_120_6}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54fe/5ced/3ebf1a73b345ce2bf4d9b3e9b4f0a3e8"
                }}
                style={styles.ImageBackground_120_7}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cae/d7a1/c08dbbec3552ed301fd71e30d172531d"
                }}
                style={styles.ImageBackground_120_8}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7cf/94f6/ee539dd6474252af2ee307d7380f73c8"
                }}
                style={styles.ImageBackground_120_9}
              />
            </View>
          </View>
          <View style={styles.View_120_10}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2586/addd/5fe97f9d8ab7a589d5c16ad931492d9e"
              }}
              style={styles.ImageBackground_120_11}
            />
            <View style={styles.View_120_13}>
              <Text style={styles.Text_120_13}>View More</Text>
            </View>
          </View>
          <View style={styles.View_120_14}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc5d/c887/324d25d0281b742c52a330964437c7b1"
              }}
              style={styles.ImageBackground_120_15}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c936/b733/04c7a3f57109d42fc6934b5c6f05838e"
              }}
              style={styles.ImageBackground_123_75}
            />
          </View>
          <View style={styles.View_120_17}>
            <View style={styles.View_120_18}>
              <Text style={styles.Text_120_18}>WP Funnels</Text>
            </View>
            <View style={styles.View_120_19}>
              <Text style={styles.Text_120_19}>
                Generate flawless product feed for large marketplaces such as
                Google Shopping, Facebook Ads, eBay, etc and increase sales.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_119_12}>
          <View style={styles.View_119_13} />
          <View style={styles.View_119_14}>
            <View style={styles.View_119_15} />
            <View style={styles.View_119_16}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54fe/5ced/3ebf1a73b345ce2bf4d9b3e9b4f0a3e8"
                }}
                style={styles.ImageBackground_119_17}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cae/d7a1/c08dbbec3552ed301fd71e30d172531d"
                }}
                style={styles.ImageBackground_119_18}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7cf/94f6/ee539dd6474252af2ee307d7380f73c8"
                }}
                style={styles.ImageBackground_119_19}
              />
            </View>
          </View>
          <View style={styles.View_119_20}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5821/c7b3/462f29ee426c4d191fb8aeacacf4044b"
              }}
              style={styles.ImageBackground_119_21}
            />
            <View style={styles.View_119_23}>
              <Text style={styles.Text_119_23}>View More</Text>
            </View>
          </View>
          <View style={styles.View_119_24}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfb1/1410/32ead0b9185eb0e34d91149e9a978028"
              }}
              style={styles.ImageBackground_119_25}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0750/40b0/60b9aed8405deedca80a42cd3e19fc00"
              }}
              style={styles.ImageBackground_123_52}
            />
          </View>
          <View style={styles.View_119_27}>
            <View style={styles.View_119_28}>
              <Text style={styles.Text_119_28}>WP VR</Text>
            </View>
            <View style={styles.View_119_29}>
              <Text style={styles.Text_119_29}>
                Generate flawless product feed for large marketplaces such as
                Google Shopping, Facebook Ads, eBay, etc and increase sales.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_120_20}>
          <View style={styles.View_120_21} />
          <View style={styles.View_120_22}>
            <View style={styles.View_120_23} />
            <View style={styles.View_120_24}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54fe/5ced/3ebf1a73b345ce2bf4d9b3e9b4f0a3e8"
                }}
                style={styles.ImageBackground_120_25}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cae/d7a1/c08dbbec3552ed301fd71e30d172531d"
                }}
                style={styles.ImageBackground_120_26}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7cf/94f6/ee539dd6474252af2ee307d7380f73c8"
                }}
                style={styles.ImageBackground_120_27}
              />
            </View>
          </View>
          <View style={styles.View_120_28}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5821/c7b3/462f29ee426c4d191fb8aeacacf4044b"
              }}
              style={styles.ImageBackground_120_29}
            />
            <View style={styles.View_120_31}>
              <Text style={styles.Text_120_31}>View More</Text>
            </View>
          </View>
          <View style={styles.View_120_32}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b51/00a5/e754c86b6990e80781828cd6090cbc2c"
              }}
              style={styles.ImageBackground_120_33}
            />
            <View style={styles.View_123_79}>
              <View style={styles.View_123_80}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9083/a190/d5affa2bd0a3c35698c4d09041271445"
                  }}
                  style={styles.ImageBackground_123_81}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/014b/1662/b32b0e256f3fd3ab9e3841c520025593"
                  }}
                  style={styles.ImageBackground_123_82}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34ff/f84a/ce7416169326e865a77a6bcba7ad7ae4"
                  }}
                  style={styles.ImageBackground_123_85}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_120_35}>
            <View style={styles.View_120_36}>
              <Text style={styles.Text_120_36}>Media Storage to Cloud</Text>
            </View>
            <View style={styles.View_120_37}>
              <Text style={styles.Text_120_37}>
                Generate flawless product feed for large marketplaces such as
                Google Shopping, Facebook Ads, eBay, etc and increase sales.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_119_30}>
          <View style={styles.View_119_31} />
          <View style={styles.View_119_32}>
            <View style={styles.View_119_33} />
            <View style={styles.View_119_34}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54fe/5ced/3ebf1a73b345ce2bf4d9b3e9b4f0a3e8"
                }}
                style={styles.ImageBackground_119_35}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cae/d7a1/c08dbbec3552ed301fd71e30d172531d"
                }}
                style={styles.ImageBackground_119_36}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7cf/94f6/ee539dd6474252af2ee307d7380f73c8"
                }}
                style={styles.ImageBackground_119_37}
              />
            </View>
          </View>
          <View style={styles.View_119_38}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2586/addd/5fe97f9d8ab7a589d5c16ad931492d9e"
              }}
              style={styles.ImageBackground_119_39}
            />
            <View style={styles.View_119_41}>
              <Text style={styles.Text_119_41}>View More</Text>
            </View>
          </View>
          <View style={styles.View_119_42}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc5d/c887/324d25d0281b742c52a330964437c7b1"
              }}
              style={styles.ImageBackground_119_43}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b2d/0701/5191957c2f61d97ffd00277331f26ebf"
              }}
              style={styles.ImageBackground_123_53}
            />
          </View>
          <View style={styles.View_119_45}>
            <View style={styles.View_119_46}>
              <Text style={styles.Text_119_46}>Cart Lift</Text>
            </View>
            <View style={styles.View_119_47}>
              <Text style={styles.Text_119_47}>
                Generate flawless product feed for large marketplaces such as
                Google Shopping, Facebook Ads, eBay, etc and increase sales.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_120_38}>
          <View style={styles.View_120_39} />
          <View style={styles.View_120_40}>
            <View style={styles.View_120_41} />
            <View style={styles.View_120_42}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54fe/5ced/3ebf1a73b345ce2bf4d9b3e9b4f0a3e8"
                }}
                style={styles.ImageBackground_120_43}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cae/d7a1/c08dbbec3552ed301fd71e30d172531d"
                }}
                style={styles.ImageBackground_120_44}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7cf/94f6/ee539dd6474252af2ee307d7380f73c8"
                }}
                style={styles.ImageBackground_120_45}
              />
            </View>
          </View>
          <View style={styles.View_120_46}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2586/addd/5fe97f9d8ab7a589d5c16ad931492d9e"
              }}
              style={styles.ImageBackground_120_47}
            />
            <View style={styles.View_120_49}>
              <Text style={styles.Text_120_49}>View More</Text>
            </View>
          </View>
          <View style={styles.View_120_50}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2095/a9cd/9943ca19e3da83c33ff48d98ba3f96a7"
              }}
              style={styles.ImageBackground_120_51}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f238/eb6f/6e63f4c54eaabb156382a3f43c4ec03a"
              }}
              style={styles.ImageBackground_123_91}
            />
          </View>
          <View style={styles.View_120_53}>
            <View style={styles.View_120_54}>
              <Text style={styles.Text_120_54}>Variation Swatches</Text>
            </View>
            <View style={styles.View_120_55}>
              <Text style={styles.Text_120_55}>
                Generate flawless product feed for large marketplaces such as
                Google Shopping, Facebook Ads, eBay, etc and increase sales.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_162_96}>
          <View style={styles.View_162_97} />
          <View style={styles.View_162_98}>
            <Text style={styles.Text_162_98}>View All Plugins</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_124_0}>
        <View style={styles.View_98_18}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eea9/4b5e/c1ba22bb737754c74dd3b7ccded03d8a"
            }}
            style={styles.ImageBackground_97_5}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf24/4300/8a7024571abfc0083bdda7378f4c2630"
            }}
            style={styles.ImageBackground_97_4}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f291/aa7f/291cb0e7774b6bb6b6647e72bffa0da1"
            }}
            style={styles.ImageBackground_94_11}
          />
        </View>
        <View style={styles.View_98_19}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6ea/9718/937727de10e9a777a72329f41daaf29d"
            }}
            style={styles.ImageBackground_98_22}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc5a/a4e9/77626a85174520ba16ef34955030f8ee"
            }}
            style={styles.ImageBackground_98_21}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d082/984c/efb8492f864e85bb59b0c5497cb35059"
            }}
            style={styles.ImageBackground_98_23}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2ab/995b/46036be811ed5994309be960279cee0a"
          }}
          style={styles.ImageBackground_213_0}
        />
        <View style={styles.View_97_28}>
          <View style={styles.View_97_27}>
            <View style={styles.View_96_9} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2599/7a2e/b13e8db84ed2dc74a57f73dea5341b48"
              }}
              style={styles.ImageBackground_97_8}
            />
            <View style={styles.View_97_12} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebf7/5181/d07c41a514766e88494ef969d1b5c8bc"
              }}
              style={styles.ImageBackground_97_10}
            />
          </View>
        </View>
        <View style={styles.View_97_26}>
          <View style={styles.View_94_8} />
          <View style={styles.View_97_23}>
            <View style={styles.View_96_4}>
              <Text style={styles.Text_96_4}>Docs</Text>
            </View>
          </View>
          <View style={styles.View_97_24}>
            <View style={styles.View_96_5}>
              <Text style={styles.Text_96_5}>Support</Text>
            </View>
          </View>
          <View style={styles.View_97_25}>
            <View style={styles.View_96_6}>
              <Text style={styles.Text_96_6}>Blog</Text>
            </View>
          </View>
          <View style={styles.View_97_22}>
            <View style={styles.View_94_12}>
              <Text style={styles.Text_94_12}>Plugins</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/15fc/d4fe/0ef539a1283c7feab4f7c93d5f13257c"
              }}
              style={styles.ImageBackground_97_15}
            />
            <View style={styles.View_96_3} />
          </View>
          <View style={styles.View_97_20}>
            <View style={styles.View_96_8}>
              <Text style={styles.Text_96_8}>Account</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3932/2af0/67fbcca05866ee34c64f79ddfaf02251"
              }}
              style={styles.ImageBackground_97_18}
            />
          </View>
        </View>
        <View style={styles.View_112_0}>
          <View style={styles.View_105_4} />
          <View style={styles.View_100_3}>
            <Text style={styles.Text_100_3}>View Plugins</Text>
          </View>
        </View>
        <View style={styles.View_98_0}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/73dd/6ea2/cd1b20e2643cd4e8625fc8c16eafd577"
            }}
            style={styles.ImageBackground_98_1}
          />
        </View>
        <View style={styles.View_98_17}>
          <View style={styles.View_92_2}>
            <Text style={styles.Text_92_2}>WordPress Plugins</Text>
          </View>
          <View style={styles.View_98_15}>
            <Text style={styles.Text_98_15}>Amazing Useful</Text>
          </View>
          <View style={styles.View_98_16}>
            <Text style={styles.Text_98_16}>We Make</Text>
          </View>
        </View>
        <View style={styles.View_111_0}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06cb/acdb/eb5e45979ece8397a86e3bc01f5a880c"
            }}
            style={styles.ImageBackground_111_3}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e548/6109/98e6cd46644629b48cf6072321c3266d"
            }}
            style={styles.ImageBackground_111_4}
          />
          <View style={styles.View_111_5}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12ad/78d6/814dba14855112f881eb2b4f2500ac36"
              }}
              style={styles.ImageBackground_111_6}
            />
            <View style={styles.View_123_99}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74f2/4658/2b95a4651591ee13f1e55e166b1b50f2"
                }}
                style={styles.ImageBackground_123_3}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ae7/9056/d9a6e2262d59a19d5c65dc2f0d00c8a1"
                }}
                style={styles.ImageBackground_123_9}
              />
            </View>
            <View style={styles.View_123_103}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee49/ae5c/2cb90ada85df5f686dce07d5273475fb"
                }}
                style={styles.ImageBackground_123_7}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e1f/5c01/e0d1dd94ac4423342fd92b60ce482d62"
                }}
                style={styles.ImageBackground_123_16}
              />
            </View>
            <View style={styles.View_123_104}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74f2/4658/2b95a4651591ee13f1e55e166b1b50f2"
                }}
                style={styles.ImageBackground_123_8}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02b4/3165/1efcdb50dac87e27b6f7b52ec528a65b"
                }}
                style={styles.ImageBackground_123_38}
              />
            </View>
            <View style={styles.View_123_100}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/681d/5c9d/08d04e88cb534e826222de4c948765bd"
                }}
                style={styles.ImageBackground_123_5}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a284/8028/dbc4a377701d09874a6b770f2058d872"
                }}
                style={styles.ImageBackground_123_11}
              />
            </View>
            <View style={styles.View_123_101}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd6c/a9b8/47deb196c51fbfab81dd35f055470707"
                }}
                style={styles.ImageBackground_123_4}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a976/fee4/99498e2eabd35a9c6f3bf32a4f0f50ff"
                }}
                style={styles.ImageBackground_123_10}
              />
            </View>
            <View style={styles.View_123_102}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2868/1f25/be65c5b5bffa3798f7d46455e3688d93"
                }}
                style={styles.ImageBackground_123_6}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffe7/98ed/7f9e58daf65004b9b2d8ff22cc260da8"
                }}
                style={styles.ImageBackground_123_12}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0286/ccab/8b62e26a53bd8464ff7b656f1ebc69ca"
              }}
              style={styles.ImageBackground_111_12}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6986/c310/3146d028e89bc5f1f11ece5bd3fabffa"
              }}
              style={styles.ImageBackground_111_13}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6986/c310/3146d028e89bc5f1f11ece5bd3fabffa"
              }}
              style={styles.ImageBackground_111_14}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/971d/e528/c10e4f817eef5f2b233629e864f0671d"
          }}
          style={styles.ImageBackground_204_2}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2de5/ecfd/d23e698495e1d172a8f55cb89b5dae92"
          }}
          style={styles.ImageBackground_195_1}
        />
        <View style={styles.View_202_0}>
          <View style={styles.View_202_9} />
          <View style={styles.View_202_2} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e66e/e61c/b328b69afade2a04e5f4cca11c13dfc0"
            }}
            style={styles.ImageBackground_202_3}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ba0/65d8/6b3ba6bc9e05564f1f4a234470eb4213"
            }}
            style={styles.ImageBackground_202_4}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22a8/bf14/2c3ef69a8c049ca15ff938662a783f2c"
            }}
            style={styles.ImageBackground_202_5}
          />
          <View style={styles.View_202_6} />
          <View style={styles.View_202_7} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f1b/189b/b26d32e6d018c56594826dcaaf6b7ccf"
            }}
            style={styles.ImageBackground_202_8}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/199b/752a/42d56aca028e894d9083f16f5849501c"
            }}
            style={styles.ImageBackground_204_8}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19e2/1201/df2d920f01f41dae3e3e89cdeaeefe15"
          }}
          style={styles.ImageBackground_204_7}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e04/2b24/0790f8a3033965b741b1a752d046eab5"
          }}
          style={styles.ImageBackground_201_31}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a928/2ae8/6a552a17e7fff4a76586ce7cc7c1effe"
          }}
          style={styles.ImageBackground_201_32}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/370d/d0cc/1af902758557611cfba7ba5f68f1a5be"
          }}
          style={styles.ImageBackground_204_3}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6edf/9b16/8e25a8c50f5f0709e729650ff336cb7b"
          }}
          style={styles.ImageBackground_204_6}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3595/4970/b5b5f3f598122d670d99de331f144fa8"
          }}
          style={styles.ImageBackground_204_4}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13f5/d142/b029dc07d96469409db9bbda27409c34"
          }}
          style={styles.ImageBackground_204_11}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_224_5: {
    width: wp("169.27083333333331%"),
    minWidth: wp("169.27083333333331%"),
    height: hp("162.56830601092895%"),
    minHeight: hp("162.56830601092895%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-34.270833333333336%"),
    top: hp("708.3334667435109%")
  },
  View_182_25: {
    width: wp("55.752150217692055%"),
    minWidth: wp("55.752150217692055%"),
    height: hp("146.9600489882172%"),
    minHeight: hp("146.9600489882172%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.55085862790304%")
  },
  ImageBackground_182_26: {
    width: wp("27.416454950968422%"),
    minWidth: wp("27.416454950968422%"),
    height: hp("74.55194191854508%"),
    minHeight: hp("74.55194191854508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.193257649739586%"),
    top: hp("41.57728184767757%")
  },
  ImageBackground_182_27: {
    width: wp("23.094100952148438%"),
    minWidth: wp("23.094100952148438%"),
    height: hp("62.79842189100923%"),
    minHeight: hp("62.79842189100923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.232035319010418%"),
    top: hp("29.86666986851094%")
  },
  ImageBackground_182_28: {
    width: wp("55.752150217692055%"),
    minWidth: wp("55.752150217692055%"),
    height: hp("146.9600489882172%"),
    minHeight: hp("146.9600489882172%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_206_2: {
    width: wp("63.645833333333336%"),
    minWidth: wp("63.645833333333336%"),
    height: hp("162.56830601092895%"),
    minHeight: hp("162.56830601092895%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("105.625%"),
    top: hp("0%")
  },
  ImageBackground_206_0: {
    width: wp("36.041666666666664%"),
    minWidth: wp("36.041666666666664%"),
    height: hp("77.3224043715847%"),
    minHeight: hp("77.3224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.145833333333343%"),
    top: hp("12.295081967213036%")
  },
  ImageBackground_206_1: {
    width: wp("63.645833333333336%"),
    minWidth: wp("63.645833333333336%"),
    height: hp("162.56830601092895%"),
    minHeight: hp("162.56830601092895%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_206_4: {
    width: wp("40.520833333333336%"),
    minWidth: wp("40.520833333333336%"),
    height: hp("76.36612021857924%"),
    minHeight: hp("76.36612021857924%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.312500000000014%"),
    top: hp("33.60655737704917%")
  },
  View_224_3: {
    width: wp("20.477081934611004%"),
    minWidth: wp("20.477081934611004%"),
    height: hp("42.85202860180797%"),
    minHeight: hp("42.85202860180797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("115.36458333333334%"),
    top: hp("49.72664254610652%")
  },
  ImageBackground_206_7: {
    width: wp("20.477081934611004%"),
    minWidth: wp("20.477081934611004%"),
    height: hp("42.85202860180797%"),
    minHeight: hp("42.85202860180797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0000031789143832838818%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_215_31: {
    width: wp("101.04166666666667%"),
    height: hp("76.37083960361169%"),
    top: hp("47.601218301741824%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.270830154418945%")
  },
  View_215_32: {
    width: wp("82.01983133951823%"),
    height: hp("76.37083960361169%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.778197606404623%")
  },
  ImageBackground_215_33: {
    width: wp("82.01983133951823%"),
    minWidth: wp("82.01983133951823%"),
    height: hp("76.37083960361169%"),
    minHeight: hp("76.37083960361169%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_215_77: {
    width: wp("100.93749999999999%"),
    height: hp("49.015357846119365%"),
    top: hp("27.292787312158453%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.10416666666666666%")
  },
  ImageBackground_215_78: {
    width: wp("3.315743605295817%"),
    minWidth: wp("3.315743605295817%"),
    height: hp("15.883845970278882%"),
    minHeight: hp("15.883845970278882%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5569426218668619%"),
    top: hp("25.996373911372984%")
  },
  ImageBackground_215_79: {
    width: wp("2.8342773516972857%"),
    minWidth: wp("2.8342773516972857%"),
    height: hp("9.86779947749904%"),
    minHeight: hp("9.86779947749904%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.208162307739256%"),
    top: hp("39.11279563695359%")
  },
  ImageBackground_215_80: {
    width: wp("0.13620578994353613%"),
    minWidth: wp("0.13620578994353613%"),
    height: hp("12.91404161296907%"),
    minHeight: hp("12.91404161296907%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666473388671875%"),
    top: hp("35.90308017418033%")
  },
  ImageBackground_215_81: {
    width: wp("0.7333589593569437%"),
    minWidth: wp("0.7333589593569437%"),
    height: hp("1.923573212545426%"),
    minHeight: hp("1.923573212545426%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.715810139973958%"),
    top: hp("35.777140966530055%")
  },
  ImageBackground_215_82: {
    width: wp("1.5828049182891843%"),
    minWidth: wp("1.5828049182891843%"),
    height: hp("7.0679471792419095%"),
    minHeight: hp("7.0679471792419095%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.228973706563316%"),
    top: hp("41.83536383623641%")
  },
  ImageBackground_215_83: {
    width: wp("0.48461978634198505%"),
    minWidth: wp("0.48461978634198505%"),
    height: hp("1.2107946833626169%"),
    minHeight: hp("1.2107946833626169%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.779347101847332%"),
    top: hp("42.9686832949111%")
  },
  ImageBackground_215_84: {
    width: wp("0.8176617821057638%"),
    minWidth: wp("0.8176617821057638%"),
    height: hp("4.118026149728911%"),
    minHeight: hp("4.118026149728911%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.586353619893394%"),
    top: hp("44.62964000597674%")
  },
  ImageBackground_215_85: {
    width: wp("1.5828062097231546%"),
    minWidth: wp("1.5828062097231546%"),
    height: hp("7.0679471792419095%"),
    minHeight: hp("7.0679471792419095%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.469138463338217%"),
    top: hp("41.83536383623641%")
  },
  ImageBackground_215_86: {
    width: wp("1.5208939711252847%"),
    minWidth: wp("1.5208939711252847%"),
    height: hp("5.258125555319864%"),
    minHeight: hp("5.258125555319864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.89175287882487%"),
    top: hp("43.63173187756149%")
  },
  ImageBackground_215_87: {
    width: wp("100.93749999999999%"),
    minWidth: wp("100.93749999999999%"),
    height: hp("0.22398822945975216%"),
    minHeight: hp("0.22398822945975216%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48.79137049607243%")
  },
  ImageBackground_215_88: {
    width: wp("1.7506080865859985%"),
    minWidth: wp("1.7506080865859985%"),
    height: hp("15.59293986669655%"),
    minHeight: hp("15.59293986669655%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.247962315877279%"),
    top: hp("20.24406057889348%")
  },
  ImageBackground_215_89: {
    width: wp("1.3612046837806702%"),
    minWidth: wp("1.3612046837806702%"),
    height: hp("4.279290913232689%"),
    minHeight: hp("4.279290913232689%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.64014053344727%"),
    top: hp("37.859607133709005%")
  },
  ImageBackground_215_90: {
    width: wp("0.4350928962230683%"),
    minWidth: wp("0.4350928962230683%"),
    height: hp("0.7951555356301897%"),
    minHeight: hp("0.7951555356301897%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.10939534505209%"),
    top: hp("45.76862939719945%")
  },
  ImageBackground_215_91: {
    width: wp("0.8116426567236582%"),
    minWidth: wp("0.8116426567236582%"),
    height: hp("4.328568515881814%"),
    minHeight: hp("4.328568515881814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.19952392578125%"),
    top: hp("41.72336599214475%")
  },
  ImageBackground_215_92: {
    width: wp("0.2797192831834157%"),
    minWidth: wp("0.2797192831834157%"),
    height: hp("1.4503183260641463%"),
    minHeight: hp("1.4503183260641463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.42830403645834%"),
    top: hp("45.994826353312874%")
  },
  ImageBackground_215_93: {
    width: wp("1.6225141286849976%"),
    minWidth: wp("1.6225141286849976%"),
    height: hp("4.255779714532237%"),
    minHeight: hp("4.255779714532237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.50694274902344%"),
    top: hp("44.578143677424805%")
  },
  ImageBackground_215_94: {
    width: wp("1.6225181023279824%"),
    minWidth: wp("1.6225181023279824%"),
    height: hp("4.255779714532237%"),
    minHeight: hp("4.255779714532237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.2285130818685%"),
    top: hp("44.578143677424805%")
  },
  ImageBackground_215_95: {
    width: wp("0.6131391723950704%"),
    minWidth: wp("0.6131391723950704%"),
    height: hp("1.067307282015274%"),
    minHeight: hp("1.067307282015274%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.36899820963542%"),
    top: hp("47.12934650358602%")
  },
  ImageBackground_215_96: {
    width: wp("0.4308753212292989%"),
    minWidth: wp("0.4308753212292989%"),
    height: hp("1.3226502580069455%"),
    minHeight: hp("1.3226502580069455%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.54406738281251%"),
    top: hp("37.46644734033464%")
  },
  ImageBackground_215_97: {
    width: wp("1.1852902173995972%"),
    minWidth: wp("1.1852902173995972%"),
    height: hp("4.591758915635406%"),
    minHeight: hp("4.591758915635406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.87027486165366%"),
    top: hp("37.82932302339475%")
  },
  ImageBackground_215_98: {
    width: wp("0.2857806285222371%"),
    minWidth: wp("0.2857806285222371%"),
    height: hp("1.8681806293341632%"),
    minHeight: hp("1.8681806293341632%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.60923512776692%"),
    top: hp("38.59216241888657%")
  },
  ImageBackground_215_99: {
    width: wp("0.6481589873631796%"),
    minWidth: wp("0.6481589873631796%"),
    height: hp("1.6799117698044073%"),
    minHeight: hp("1.6799117698044073%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.11067962646484%"),
    top: hp("36.538045914446684%")
  },
  ImageBackground_215_100: {
    width: wp("1.372931698958079%"),
    minWidth: wp("1.372931698958079%"),
    height: hp("2.405648674469828%"),
    minHeight: hp("2.405648674469828%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.11439259847006%"),
    top: hp("39.511491952698066%")
  },
  ImageBackground_215_101: {
    width: wp("1.471363107363383%"),
    minWidth: wp("1.471363107363383%"),
    height: hp("5.385800137545893%"),
    minHeight: hp("5.385800137545893%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.44756825764975%"),
    top: hp("42.138871990266466%")
  },
  ImageBackground_215_102: {
    width: wp("0.8604108293851217%"),
    minWidth: wp("0.8604108293851217%"),
    height: hp("2.2644595370266605%"),
    minHeight: hp("2.2644595370266605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.05687967936198%"),
    top: hp("35.61864967554652%")
  },
  ImageBackground_215_103: {
    width: wp("0.7199816405773163%"),
    minWidth: wp("0.7199816405773163%"),
    height: hp("5.157719283807473%"),
    minHeight: hp("5.157719283807473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.270581563313804%"),
    top: hp("41.60323012722006%")
  },
  ImageBackground_215_104: {
    width: wp("1.1844353874524434%"),
    minWidth: wp("1.1844353874524434%"),
    height: hp("3.282547518203819%"),
    minHeight: hp("3.282547518203819%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.93517557779948%"),
    top: hp("43.56676112107243%")
  },
  ImageBackground_215_105: {
    width: wp("1.1643686890602112%"),
    minWidth: wp("1.1643686890602112%"),
    height: hp("3.6913288095609738%"),
    minHeight: hp("3.6913288095609738%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.88863627115886%"),
    top: hp("42.77837367657105%")
  },
  ImageBackground_215_106: {
    width: wp("0.5448185900847117%"),
    minWidth: wp("0.5448185900847117%"),
    height: hp("0.282227374165436%"),
    minHeight: hp("0.282227374165436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.7127431233724%"),
    top: hp("43.32715644211066%")
  },
  ImageBackground_215_107: {
    width: wp("0.7735081017017365%"),
    minWidth: wp("0.7735081017017365%"),
    height: hp("3.3740854002738914%"),
    minHeight: hp("3.3740854002738914%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.937854766845696%"),
    top: hp("43.494252689549285%")
  },
  ImageBackground_215_108: {
    width: wp("0.15029698610305786%"),
    minWidth: wp("0.15029698610305786%"),
    height: hp("0.5913253690375656%"),
    minHeight: hp("0.5913253690375656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.24560546875%"),
    top: hp("41.6898133324795%")
  },
  ImageBackground_215_109: {
    width: wp("0.4427755375703176%"),
    minWidth: wp("0.4427755375703176%"),
    height: hp("0.2822205342881667%"),
    minHeight: hp("0.2822205342881667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.729820251464844%"),
    top: hp("41.49490106301232%")
  },
  ImageBackground_215_110: {
    width: wp("2.640000581741333%"),
    minWidth: wp("2.640000581741333%"),
    height: hp("1.7157509027283049%"),
    minHeight: hp("1.7157509027283049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.098541895548504%"),
    top: hp("47.040895555840166%")
  },
  ImageBackground_215_111: {
    width: wp("1.8611963589986167%"),
    minWidth: wp("1.8611963589986167%"),
    height: hp("1.212898238760526%"),
    minHeight: hp("1.212898238760526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.45042673746745%"),
    top: hp("47.558260224555966%")
  },
  ImageBackground_215_112: {
    width: wp("2.305678923924764%"),
    minWidth: wp("2.305678923924764%"),
    height: hp("10.367296562820185%"),
    minHeight: hp("10.367296562820185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.631429036458336%"),
    top: hp("32.96545476861331%")
  },
  ImageBackground_215_113: {
    width: wp("0.14944215615590414%"),
    minWidth: wp("0.14944215615590414%"),
    height: hp("9.088325500488281%"),
    minHeight: hp("9.088325500488281%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.709119160970054%"),
    top: hp("39.650371947575195%")
  },
  ImageBackground_215_114: {
    width: wp("0.49617062012354535%"),
    minWidth: wp("0.49617062012354535%"),
    height: hp("2.0682384407585435%"),
    minHeight: hp("2.0682384407585435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.716100056966145%"),
    top: hp("41.073458311987565%")
  },
  ImageBackground_215_115: {
    width: wp("3.0358093976974487%"),
    minWidth: wp("3.0358093976974487%"),
    height: hp("13.663282550749232%"),
    minHeight: hp("13.663282550749232%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.112260182698567%"),
    top: hp("27.947030823087402%")
  },
  ImageBackground_215_116: {
    width: wp("0.14944215615590414%"),
    minWidth: wp("0.14944215615590414%"),
    height: hp("11.974408717754761%"),
    minHeight: hp("11.974408717754761%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.555442810058594%"),
    top: hp("36.764309575648895%")
  },
  ImageBackground_215_117: {
    width: wp("0.6112426022688547%"),
    minWidth: wp("0.6112426022688547%"),
    height: hp("2.668592578074971%"),
    minHeight: hp("2.668592578074971%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.563027699788414%"),
    top: hp("38.66940691171453%")
  },
  ImageBackground_215_118: {
    width: wp("1.6336160898208618%"),
    minWidth: wp("1.6336160898208618%"),
    height: hp("28.147479614924865%"),
    minHeight: hp("28.147479614924865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.9178714752197275%"),
    top: hp("7.689562521345579%")
  },
  ImageBackground_215_119: {
    width: wp("1.295451025168101%"),
    minWidth: wp("1.295451025168101%"),
    height: hp("2.4537951568436753%"),
    minHeight: hp("2.4537951568436753%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.183451334635414%"),
    top: hp("25.671320013661102%")
  },
  ImageBackground_215_120: {
    width: wp("1.401770810286204%"),
    minWidth: wp("1.401770810286204%"),
    height: hp("3.307182801877215%"),
    minHeight: hp("3.307182801877215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.122390747070305%"),
    top: hp("27.733107603312874%")
  },
  ImageBackground_215_121: {
    width: wp("0.6250957647959392%"),
    minWidth: wp("0.6250957647959392%"),
    height: hp("1.9039000318350037%"),
    minHeight: hp("1.9039000318350037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.5404052734375%"),
    top: hp("44.211932739924805%")
  },
  ImageBackground_215_122: {
    width: wp("1.5025315682093303%"),
    minWidth: wp("1.5025315682093303%"),
    height: hp("3.2567910157917628%"),
    minHeight: hp("3.2567910157917628%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.0899403889974%"),
    top: hp("45.72380357752729%")
  },
  ImageBackground_215_123: {
    width: wp("1.6212325294812522%"),
    minWidth: wp("1.6212325294812522%"),
    height: hp("0.3919794259826994%"),
    minHeight: hp("0.3919794259826994%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.01991526285807%"),
    top: hp("27.733107603312874%")
  },
  ImageBackground_215_124: {
    width: wp("0.14944215615590414%"),
    minWidth: wp("0.14944215615590414%"),
    height: hp("12.956599459622076%"),
    minHeight: hp("12.956599459622076%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.77737426757812%"),
    top: hp("30.947292307035468%")
  },
  ImageBackground_215_125: {
    width: wp("0.447471688191096%"),
    minWidth: wp("0.447471688191096%"),
    height: hp("0.3919794259826994%"),
    minHeight: hp("0.3919794259826994%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.628372192382805%"),
    top: hp("35.817964480874366%")
  },
  ImageBackground_215_126: {
    width: wp("0.447471688191096%"),
    minWidth: wp("0.447471688191096%"),
    height: hp("0.3919794259826994%"),
    minHeight: hp("0.3919794259826994%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.628372192382805%"),
    top: hp("40.47131147540972%")
  },
  ImageBackground_215_127: {
    width: wp("1.0063837965329487%"),
    minWidth: wp("1.0063837965329487%"),
    height: hp("0.3919794259826994%"),
    minHeight: hp("0.3919794259826994%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.36108271280924%"),
    top: hp("47.676995282616076%")
  },
  ImageBackground_215_128: {
    width: wp("2.345388929049174%"),
    minWidth: wp("2.345388929049174%"),
    height: hp("20.487081809122053%"),
    minHeight: hp("20.487081809122053%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.497933387756348%"),
    top: hp("28.261745432035468%")
  },
  ImageBackground_215_129: {
    width: wp("99.10447438557942%"),
    minWidth: wp("99.10447438557942%"),
    height: hp("25.91334275209187%"),
    minHeight: hp("25.91334275209187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6246725718180338%"),
    top: hp("22.871307206284087%")
  },
  ImageBackground_215_209: {
    width: wp("2.3453879356384277%"),
    minWidth: wp("2.3453879356384277%"),
    height: hp("20.487081809122053%"),
    minHeight: hp("20.487081809122053%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4435749053955074%"),
    top: hp("28.261745432035468%")
  },
  ImageBackground_215_210: {
    width: wp("0.48461978634198505%"),
    minWidth: wp("0.48461978634198505%"),
    height: hp("1.2107946833626169%"),
    minHeight: hp("1.2107946833626169%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.019513448079428%"),
    top: hp("42.9686832949111%")
  },
  ImageBackground_215_211: {
    width: wp("0.41929230093955994%"),
    minWidth: wp("0.41929230093955994%"),
    height: hp("2.1446901592400556%"),
    minHeight: hp("2.1446901592400556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.447101593017578%"),
    top: hp("38.26610794484293%")
  },
  ImageBackground_215_212: {
    width: wp("0.41929230093955994%"),
    minWidth: wp("0.41929230093955994%"),
    height: hp("2.1995661688632655%"),
    minHeight: hp("2.1995661688632655%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.447101593017578%"),
    top: hp("41.01108905396177%")
  },
  ImageBackground_215_213: {
    width: wp("0.41929230093955994%"),
    minWidth: wp("0.41929230093955994%"),
    height: hp("2.1794011684063355%"),
    minHeight: hp("2.1794011684063355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.447101593017578%"),
    top: hp("43.749332949112045%")
  },
  ImageBackground_215_214: {
    width: wp("0.4483264684677124%"),
    minWidth: wp("0.4483264684677124%"),
    height: hp("2.1446901592400556%"),
    minHeight: hp("2.1446901592400556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.39274787902832%"),
    top: hp("38.26610794484293%")
  },
  ImageBackground_215_215: {
    width: wp("0.4483264684677124%"),
    minWidth: wp("0.4483264684677124%"),
    height: hp("2.1995661688632655%"),
    minHeight: hp("2.1995661688632655%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.39274787902832%"),
    top: hp("41.01108905396177%")
  },
  ImageBackground_215_216: {
    width: wp("0.4483264684677124%"),
    minWidth: wp("0.4483264684677124%"),
    height: hp("2.1794011684063355%"),
    minHeight: hp("2.1794011684063355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.39274787902832%"),
    top: hp("43.749332949112045%")
  },
  ImageBackground_215_217: {
    width: wp("4.230920473734537%"),
    minWidth: wp("4.230920473734537%"),
    height: hp("9.435503600073643%"),
    minHeight: hp("9.435503600073643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.521154403686523%"),
    top: hp("37.12378329918033%")
  },
  ImageBackground_215_218: {
    width: wp("0.6144200762112935%"),
    minWidth: wp("0.6144200762112935%"),
    height: hp("1.1860206478931865%"),
    minHeight: hp("1.1860206478931865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.892552693684896%"),
    top: hp("37.267132535006795%")
  },
  ImageBackground_215_219: {
    width: wp("0.6144200762112935%"),
    minWidth: wp("0.6144200762112935%"),
    height: hp("2.213004899155247%"),
    minHeight: hp("2.213004899155247%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.892552693684896%"),
    top: hp("38.7577911543716%")
  },
  ImageBackground_215_220: {
    width: wp("0.6144200762112935%"),
    minWidth: wp("0.6144200762112935%"),
    height: hp("2.215247076065814%"),
    minHeight: hp("2.215247076065814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.892552693684896%"),
    top: hp("41.47702409921453%")
  },
  ImageBackground_215_221: {
    width: wp("0.6144200762112935%"),
    minWidth: wp("0.6144200762112935%"),
    height: hp("2.213004899155247%"),
    minHeight: hp("2.213004899155247%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.892552693684896%"),
    top: hp("44.20179356642757%")
  },
  ImageBackground_215_222: {
    width: wp("0.6148474415143331%"),
    minWidth: wp("0.6148474415143331%"),
    height: hp("1.1860206478931865%"),
    minHeight: hp("1.1860206478931865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.76668357849121%"),
    top: hp("37.267132535006795%")
  },
  ImageBackground_215_223: {
    width: wp("0.6148474415143331%"),
    minWidth: wp("0.6148474415143331%"),
    height: hp("2.213004899155247%"),
    minHeight: hp("2.213004899155247%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.76668357849121%"),
    top: hp("38.7577911543716%")
  },
  ImageBackground_215_224: {
    width: wp("0.6148474415143331%"),
    minWidth: wp("0.6148474415143331%"),
    height: hp("2.215247076065814%"),
    minHeight: hp("2.215247076065814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.76668357849121%"),
    top: hp("41.47702409921453%")
  },
  ImageBackground_215_225: {
    width: wp("0.6148474415143331%"),
    minWidth: wp("0.6148474415143331%"),
    height: hp("2.213004899155247%"),
    minHeight: hp("2.213004899155247%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.76668357849121%"),
    top: hp("44.20179356642757%")
  },
  ImageBackground_215_226: {
    width: wp("0.6144200762112935%"),
    minWidth: wp("0.6144200762112935%"),
    height: hp("2.21188394098334%"),
    minHeight: hp("2.21188394098334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.285778681437176%"),
    top: hp("38.385976989412484%")
  },
  ImageBackground_215_227: {
    width: wp("0.6144200762112935%"),
    minWidth: wp("0.6144200762112935%"),
    height: hp("2.21188394098334%"),
    minHeight: hp("2.21188394098334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.285778681437176%"),
    top: hp("41.1085451886953%")
  },
  ImageBackground_215_228: {
    width: wp("0.6144200762112935%"),
    minWidth: wp("0.6144200762112935%"),
    height: hp("2.213004899155247%"),
    minHeight: hp("2.213004899155247%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.285778681437176%"),
    top: hp("43.828845414959005%")
  },
  ImageBackground_215_229: {
    width: wp("0.6144213676452637%"),
    minWidth: wp("0.6144213676452637%"),
    height: hp("2.21188394098334%"),
    minHeight: hp("2.21188394098334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.122618039449055%"),
    top: hp("38.385976989412484%")
  },
  ImageBackground_215_230: {
    width: wp("0.6144213676452637%"),
    minWidth: wp("0.6144213676452637%"),
    height: hp("2.21188394098334%"),
    minHeight: hp("2.21188394098334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.122618039449055%"),
    top: hp("41.1085451886953%")
  },
  ImageBackground_215_231: {
    width: wp("0.6144213676452637%"),
    minWidth: wp("0.6144213676452637%"),
    height: hp("2.213004899155247%"),
    minHeight: hp("2.213004899155247%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.122618039449055%"),
    top: hp("43.828845414959005%")
  },
  ImageBackground_215_232: {
    width: wp("1.7506080865859985%"),
    minWidth: wp("1.7506080865859985%"),
    height: hp("2.21188394098334%"),
    minHeight: hp("2.21188394098334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.136743863423668%"),
    top: hp("38.385976989412484%")
  },
  ImageBackground_215_233: {
    width: wp("0.5249956250190735%"),
    minWidth: wp("0.5249956250190735%"),
    height: hp("1.3058483926324895%"),
    minHeight: hp("1.3058483926324895%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.749722798665367%"),
    top: hp("42.919521644467295%")
  },
  ImageBackground_215_234: {
    width: wp("0.6148474415143331%"),
    minWidth: wp("0.6148474415143331%"),
    height: hp("2.2107629828114326%"),
    minHeight: hp("2.2107629828114326%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.536190668741862%"),
    top: hp("38.39825072575138%")
  },
  ImageBackground_215_235: {
    width: wp("0.6148474415143331%"),
    minWidth: wp("0.6148474415143331%"),
    height: hp("2.21188394098334%"),
    minHeight: hp("2.21188394098334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.536190668741862%"),
    top: hp("41.11975164361331%")
  },
  ImageBackground_215_236: {
    width: wp("0.6148474415143331%"),
    minWidth: wp("0.6148474415143331%"),
    height: hp("2.2107629828114326%"),
    minHeight: hp("2.2107629828114326%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.536190668741862%"),
    top: hp("43.84225313780735%")
  },
  ImageBackground_215_237: {
    width: wp("0.6144207219282786%"),
    minWidth: wp("0.6144207219282786%"),
    height: hp("2.2107629828114326%"),
    minHeight: hp("2.2107629828114326%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.373028437296549%"),
    top: hp("38.39825072575138%")
  },
  ImageBackground_215_238: {
    width: wp("0.6144207219282786%"),
    minWidth: wp("0.6144207219282786%"),
    height: hp("2.21188394098334%"),
    minHeight: hp("2.21188394098334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.373028437296549%"),
    top: hp("41.11975164361331%")
  },
  ImageBackground_215_239: {
    width: wp("0.6144207219282786%"),
    minWidth: wp("0.6144207219282786%"),
    height: hp("2.2107629828114326%"),
    minHeight: hp("2.2107629828114326%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.373028437296549%"),
    top: hp("43.84225313780735%")
  },
  ImageBackground_215_240: {
    width: wp("1.7506080865859985%"),
    minWidth: wp("1.7506080865859985%"),
    height: hp("2.2107629828114326%"),
    minHeight: hp("2.2107629828114326%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.386302312215169%"),
    top: hp("38.39825072575138%")
  },
  ImageBackground_215_241: {
    width: wp("0.5236524343490601%"),
    minWidth: wp("0.5236524343490601%"),
    height: hp("1.3069762558233544%"),
    minHeight: hp("1.3069762558233544%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.002312342325847%"),
    top: hp("42.92952740778685%")
  },
  ImageBackground_215_242: {
    width: wp("0.5016986529032389%"),
    minWidth: wp("0.5016986529032389%"),
    height: hp("2.3350746905217408%"),
    minHeight: hp("2.3350746905217408%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.409528414408367%"),
    top: hp("38.18999743852453%")
  },
  ImageBackground_215_243: {
    width: wp("0.42697757482528687%"),
    minWidth: wp("0.42697757482528687%"),
    height: hp("2.3350746905217408%"),
    minHeight: hp("2.3350746905217408%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.93643919626872%"),
    top: hp("38.18999743852453%")
  },
  ImageBackground_215_244: {
    width: wp("0.42697757482528687%"),
    minWidth: wp("0.42697757482528687%"),
    height: hp("2.3350746905217408%"),
    minHeight: hp("2.3350746905217408%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.955206553141277%"),
    top: hp("38.18999743852453%")
  },
  ImageBackground_215_245: {
    width: wp("0.5016986529032389%"),
    minWidth: wp("0.5016986529032389%"),
    height: hp("2.3305971114361874%"),
    minHeight: hp("2.3305971114361874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.409528414408367%"),
    top: hp("40.93831380208326%")
  },
  ImageBackground_215_246: {
    width: wp("0.42697757482528687%"),
    minWidth: wp("0.42697757482528687%"),
    height: hp("2.3305971114361874%"),
    minHeight: hp("2.3305971114361874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.93643919626872%"),
    top: hp("40.93831380208326%")
  },
  ImageBackground_215_247: {
    width: wp("0.42697757482528687%"),
    minWidth: wp("0.42697757482528687%"),
    height: hp("2.3305971114361874%"),
    minHeight: hp("2.3305971114361874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.955206553141277%"),
    top: hp("40.93831380208326%")
  },
  ImageBackground_215_248: {
    width: wp("0.5016986529032389%"),
    minWidth: wp("0.5016986529032389%"),
    height: hp("2.3362024234292287%"),
    minHeight: hp("2.3362024234292287%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.409528414408367%"),
    top: hp("43.68549617913243%")
  },
  ImageBackground_215_249: {
    width: wp("0.42697757482528687%"),
    minWidth: wp("0.42697757482528687%"),
    height: hp("2.3362024234292287%"),
    minHeight: hp("2.3362024234292287%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.93643919626872%"),
    top: hp("43.68549617913243%")
  },
  ImageBackground_215_250: {
    width: wp("0.42697757482528687%"),
    minWidth: wp("0.42697757482528687%"),
    height: hp("2.3362024234292287%"),
    minHeight: hp("2.3362024234292287%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.955206553141277%"),
    top: hp("43.68549617913243%")
  },
  ImageBackground_215_251: {
    width: wp("0.5025521417458853%"),
    minWidth: wp("0.5025521417458853%"),
    height: hp("0.6719647209501005%"),
    minHeight: hp("0.6719647209501005%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.40696620941162%"),
    top: hp("34.98808647114072%")
  },
  ImageBackground_215_252: {
    width: wp("0.4483264684677124%"),
    minWidth: wp("0.4483264684677124%"),
    height: hp("2.5669032758702346%"),
    minHeight: hp("2.5669032758702346%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.393173853556315%"),
    top: hp("32.106493340163865%")
  },
  ImageBackground_215_253: {
    width: wp("0.4483264684677124%"),
    minWidth: wp("0.4483264684677124%"),
    height: hp("2.5669032758702346%"),
    minHeight: hp("2.5669032758702346%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.44752915700277%"),
    top: hp("32.106493340163865%")
  },
  ImageBackground_215_254: {
    width: wp("0.5111279090245565%"),
    minWidth: wp("0.5111279090245565%"),
    height: hp("2.6654584811684865%"),
    minHeight: hp("2.6654584811684865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.403292973836265%"),
    top: hp("32.06947201588105%")
  },
  ImageBackground_215_255: {
    width: wp("0.5046874781449636%"),
    minWidth: wp("0.5046874781449636%"),
    height: hp("0.6719647209501005%"),
    minHeight: hp("0.6719647209501005%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.362856547037761%"),
    top: hp("34.98808647114072%")
  },
  ImageBackground_215_256: {
    width: wp("0.5096761385599772%"),
    minWidth: wp("0.5096761385599772%"),
    height: hp("2.6665796999071465%"),
    minHeight: hp("2.6665796999071465%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.358927408854167%"),
    top: hp("32.06840473446027%")
  },
  ImageBackground_215_257: {
    width: wp("0.5038336416085561%"),
    minWidth: wp("0.5038336416085561%"),
    height: hp("2.3350814652573213%"),
    minHeight: hp("2.3350814652573213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.363711675008139%"),
    top: hp("38.200069906933095%")
  },
  ImageBackground_215_258: {
    width: wp("0.42697757482528687%"),
    minWidth: wp("0.42697757482528687%"),
    height: hp("2.3350814652573213%"),
    minHeight: hp("2.3350814652573213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.910243352254232%"),
    top: hp("38.200069906933095%")
  },
  ImageBackground_215_259: {
    width: wp("0.5038336416085561%"),
    minWidth: wp("0.5038336416085561%"),
    height: hp("2.3350746905217408%"),
    minHeight: hp("2.3350746905217408%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.363711675008139%"),
    top: hp("40.94838627049171%")
  },
  ImageBackground_215_260: {
    width: wp("0.42697757482528687%"),
    minWidth: wp("0.42697757482528687%"),
    height: hp("2.3350746905217408%"),
    minHeight: hp("2.3350746905217408%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.910243352254232%"),
    top: hp("40.94838627049171%")
  },
  ImageBackground_215_261: {
    width: wp("0.5038336416085561%"),
    minWidth: wp("0.5038336416085561%"),
    height: hp("2.3361956486936477%"),
    minHeight: hp("2.3361956486936477%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.363711675008139%"),
    top: hp("43.69676933913934%")
  },
  ImageBackground_215_262: {
    width: wp("0.42697757482528687%"),
    minWidth: wp("0.42697757482528687%"),
    height: hp("2.3361956486936477%"),
    minHeight: hp("2.3361956486936477%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.910243352254232%"),
    top: hp("43.69676933913934%")
  },
  ImageBackground_215_263: {
    width: wp("0.4276745021343231%"),
    minWidth: wp("0.4276745021343231%"),
    height: hp("2.3328392883467544%"),
    minHeight: hp("2.3328392883467544%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8907750447591143%"),
    top: hp("40.950587538422155%")
  },
  ImageBackground_215_264: {
    width: wp("18.55900764465332%"),
    minWidth: wp("18.55900764465332%"),
    height: hp("48.885845747150356%"),
    minHeight: hp("48.885845747150356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.356043497721354%"),
    top: hp("0%")
  },
  ImageBackground_215_265: {
    width: wp("0.40520161390304565%"),
    minWidth: wp("0.40520161390304565%"),
    height: hp("2.3350814652573213%"),
    minHeight: hp("2.3350814652573213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.913253148396809%"),
    top: hp("43.69676933913934%")
  },
  ImageBackground_215_266: {
    width: wp("0.42816653847694397%"),
    minWidth: wp("0.42816653847694397%"),
    height: hp("2.3350814652573213%"),
    minHeight: hp("2.3350814652573213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8902854919433594%"),
    top: hp("38.200069906933095%")
  },
  ImageBackground_215_267: {
    width: wp("0.04312482662498951%"),
    minWidth: wp("0.04312482662498951%"),
    height: hp("2.3350746905217408%"),
    minHeight: hp("2.3350746905217408%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8914744059244795%"),
    top: hp("40.94838627049171%")
  },
  ImageBackground_215_268: {
    width: wp("0.04312482662498951%"),
    minWidth: wp("0.04312482662498951%"),
    height: hp("2.3350746905217408%"),
    minHeight: hp("2.3350746905217408%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8914744059244795%"),
    top: hp("43.697769915471326%")
  },
  ImageBackground_215_269: {
    width: wp("0.7856384913126627%"),
    minWidth: wp("0.7856384913126627%"),
    height: hp("4.118026149728911%"),
    minHeight: hp("4.118026149728911%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.869214375813803%"),
    top: hp("44.62964000597674%")
  },
  ImageBackground_215_270: {
    width: wp("0.7343420386314392%"),
    minWidth: wp("0.7343420386314392%"),
    height: hp("1.379767271990333%"),
    minHeight: hp("1.379767271990333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.18806393941243%"),
    top: hp("38.93862865010237%")
  },
  ImageBackground_215_271: {
    width: wp("0.39965038498242694%"),
    minWidth: wp("0.39965038498242694%"),
    height: hp("0.38413900495226916%"),
    minHeight: hp("0.38413900495226916%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.94804000854492%"),
    top: hp("38.9089448855874%")
  },
  ImageBackground_215_272: {
    width: wp("0.9355067213376363%"),
    minWidth: wp("0.9355067213376363%"),
    height: hp("0.7951623755074589%"),
    minHeight: hp("0.7951623755074589%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.87848091125488%"),
    top: hp("45.12239049692619%")
  },
  ImageBackground_215_273: {
    width: wp("0.6310715277989706%"),
    minWidth: wp("0.6310715277989706%"),
    height: hp("2.75952985377911%"),
    minHeight: hp("2.75952985377911%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.379325230916336%"),
    top: hp("43.617256873292376%")
  },
  ImageBackground_215_274: {
    width: wp("0.14346384753783542%"),
    minWidth: wp("0.14346384753783542%"),
    height: hp("0.19823177590396235%"),
    minHeight: hp("0.19823177590396235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.58084042867025%"),
    top: hp("46.98046074538934%")
  },
  ImageBackground_215_275: {
    width: wp("0.12980284790198007%"),
    minWidth: wp("0.12980284790198007%"),
    height: hp("0.19823177590396235%"),
    minHeight: hp("0.19823177590396235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.45146497090657%"),
    top: hp("46.98046074538934%")
  },
  ImageBackground_215_276: {
    width: wp("0.35927265882492065%"),
    minWidth: wp("0.35927265882492065%"),
    height: hp("0.94240454376721%"),
    minHeight: hp("0.94240454376721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.14481099446614%"),
    top: hp("46.237566171448066%")
  },
  ImageBackground_215_277: {
    width: wp("2.116250197092692%"),
    minWidth: wp("2.116250197092692%"),
    height: hp("1.0866922107550616%"),
    minHeight: hp("1.0866922107550616%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.82774035135905%"),
    top: hp("45.372868105362045%")
  },
  ImageBackground_215_278: {
    width: wp("2.1162482102711997%"),
    minWidth: wp("2.1162482102711997%"),
    height: hp("1.086692797030256%"),
    minHeight: hp("1.086692797030256%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.82662137349446%"),
    top: hp("45.37233446465166%")
  },
  ImageBackground_215_279: {
    width: wp("1.8759757280349731%"),
    minWidth: wp("1.8759757280349731%"),
    height: hp("2.9062070481764164%"),
    minHeight: hp("2.9062070481764164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.9477793375651%"),
    top: hp("44.45393880208326%")
  },
  ImageBackground_215_280: {
    width: wp("0.04269775624076526%"),
    minWidth: wp("0.04269775624076526%"),
    height: hp("5.616500729420146%"),
    minHeight: hp("5.616500729420146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.82386589050293%"),
    top: hp("43.11216594091525%")
  },
  ImageBackground_215_281: {
    width: wp("0.7724957664807638%"),
    minWidth: wp("0.7724957664807638%"),
    height: hp("5.316088108417115%"),
    minHeight: hp("5.316088108417115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.45978800455729%"),
    top: hp("43.26378660775276%")
  },
  ImageBackground_215_282: {
    width: wp("1.4094356695810955%"),
    minWidth: wp("1.4094356695810955%"),
    height: hp("4.375187816515647%"),
    minHeight: hp("4.375187816515647%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.14246877034505%"),
    top: hp("43.72718685963105%")
  },
  ImageBackground_215_283: {
    width: wp("1.8842605749766033%"),
    minWidth: wp("1.8842605749766033%"),
    height: hp("2.905735682920029%"),
    minHeight: hp("2.905735682920029%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.044456481933594%"),
    top: hp("44.09633282103823%")
  },
  ImageBackground_215_284: {
    width: wp("2.115829586982727%"),
    minWidth: wp("2.115829586982727%"),
    height: hp("1.0864931377556806%"),
    minHeight: hp("1.0864931377556806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.78962198893229%"),
    top: hp("45.370266606898895%")
  },
  ImageBackground_215_285: {
    width: wp("2.115827997525533%"),
    minWidth: wp("2.115827997525533%"),
    height: hp("1.086492486338798%"),
    minHeight: hp("1.086492486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.788766860961914%"),
    top: hp("45.3740020918716%")
  },
  ImageBackground_215_286: {
    width: wp("1.4094374577204387%"),
    minWidth: wp("1.4094374577204387%"),
    height: hp("4.375193548984215%"),
    minHeight: hp("4.375193548984215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.14228439331055%"),
    top: hp("43.715646879269%")
  },
  ImageBackground_215_287: {
    width: wp("0.7728942732016245%"),
    minWidth: wp("0.7728942732016245%"),
    height: hp("5.31647478947874%"),
    minHeight: hp("5.31647478947874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.45940971374511%"),
    top: hp("43.246309874487565%")
  },
  ImageBackground_215_288: {
    width: wp("0.3415830433368683%"),
    minWidth: wp("0.3415830433368683%"),
    height: hp("0.8959555235065397%"),
    minHeight: hp("0.8959555235065397%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.67698733011881%"),
    top: hp("45.46512124316939%")
  },
  ImageBackground_215_289: {
    width: wp("2.2254095474878945%"),
    minWidth: wp("2.2254095474878945%"),
    height: hp("5.837142402357091%"),
    minHeight: hp("5.837142402357091%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.73251279195149%"),
    top: hp("42.99563215078547%")
  },
  ImageBackground_215_290: {
    width: wp("0.3415960818529129%"),
    minWidth: wp("0.3415960818529129%"),
    height: hp("0.8959914817184698%"),
    minHeight: hp("0.8959914817184698%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.63599522908528%"),
    top: hp("45.46505453808072%")
  },
  ImageBackground_215_291: {
    width: wp("0.23910741011301676%"),
    minWidth: wp("0.23910741011301676%"),
    height: hp("0.6271669773456178%"),
    minHeight: hp("0.6271669773456178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.68766212463379%"),
    top: hp("45.59953199709685%")
  },
  ImageBackground_215_292: {
    width: wp("0.08539629479249318%"),
    minWidth: wp("0.08539629479249318%"),
    height: hp("0.22413846247834587%"),
    minHeight: hp("0.22413846247834587%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.76416269938151%"),
    top: hp("45.80765187414613%")
  },
  ImageBackground_215_293: {
    width: wp("1.245068113009135%"),
    minWidth: wp("1.245068113009135%"),
    height: hp("5.0733326562766825%"),
    minHeight: hp("5.0733326562766825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.63341458638509%"),
    top: hp("40.049134968408566%")
  },
  ImageBackground_215_294: {
    width: wp("2.790297269821167%"),
    minWidth: wp("2.790297269821167%"),
    height: hp("5.868495357492582%"),
    minHeight: hp("5.868495357492582%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.089037577311196%"),
    top: hp("40.049134968408566%")
  },
  ImageBackground_215_295: {
    width: wp("0.6575465202331543%"),
    minWidth: wp("0.6575465202331543%"),
    height: hp("3.646528264863895%"),
    minHeight: hp("3.646528264863895%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.36954243977864%"),
    top: hp("42.274350025614694%")
  },
  ImageBackground_215_296: {
    width: wp("0.9722288449605305%"),
    minWidth: wp("0.9722288449605305%"),
    height: hp("2.5153834963105415%"),
    minHeight: hp("2.5153834963105415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.41270128885905%"),
    top: hp("37.82151852800541%")
  },
  ImageBackground_215_297: {
    width: wp("0.38257022698720294%"),
    minWidth: wp("0.38257022698720294%"),
    height: hp("0.2486236759873687%"),
    minHeight: hp("0.2486236759873687%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.471610387166336%"),
    top: hp("42.585729380122984%")
  },
  ImageBackground_215_298: {
    width: wp("1.0977577169736226%"),
    minWidth: wp("1.0977577169736226%"),
    height: hp("0.7985201689714942%"),
    minHeight: hp("0.7985201689714942%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.35416920979817%"),
    top: hp("41.475890112704974%")
  },
  ImageBackground_215_299: {
    width: wp("0.5594551066557566%"),
    minWidth: wp("0.5594551066557566%"),
    height: hp("3.1764645394080326%"),
    minHeight: hp("3.1764645394080326%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.988850911458336%"),
    top: hp("37.82318615522536%")
  },
  ImageBackground_215_300: {
    width: wp("0.541407863299052%"),
    minWidth: wp("0.541407863299052%"),
    height: hp("0.7985201689714942%"),
    minHeight: hp("0.7985201689714942%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.19490877787272%"),
    top: hp("41.475890112704974%")
  },
  ImageBackground_215_301: {
    width: wp("0.5600778261820475%"),
    minWidth: wp("0.5600778261820475%"),
    height: hp("3.173062579879344%"),
    minHeight: hp("3.173062579879344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.27333768208821%"),
    top: hp("37.821718643271765%")
  },
  ImageBackground_215_302: {
    width: wp("1.4248239994049072%"),
    minWidth: wp("1.4248239994049072%"),
    height: hp("3.3340670371967587%"),
    minHeight: hp("3.3340670371967587%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.973325093587235%"),
    top: hp("42.58686336663243%")
  },
  ImageBackground_215_303: {
    width: wp("3.6327258745829267%"),
    minWidth: wp("3.6327258745829267%"),
    height: hp("5.868494836359076%"),
    minHeight: hp("5.868494836359076%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.46479415893555%"),
    top: hp("40.049134968408566%")
  },
  ImageBackground_215_304: {
    width: wp("2.8394009669621787%"),
    minWidth: wp("2.8394009669621787%"),
    height: hp("0.32366465349666407%"),
    minHeight: hp("0.32366465349666407%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.14881388346354%"),
    top: hp("46.13150508025956%")
  },
  ImageBackground_215_305: {
    width: wp("2.116250197092692%"),
    minWidth: wp("2.116250197092692%"),
    height: hp("1.0866922107550616%"),
    minHeight: hp("1.0866922107550616%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.11218579610189%"),
    top: hp("45.37233446465166%")
  },
  ImageBackground_215_306: {
    width: wp("2.1162482102711997%"),
    minWidth: wp("2.1162482102711997%"),
    height: hp("1.086692797030256%"),
    minHeight: hp("1.086692797030256%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.111200332641594%"),
    top: hp("45.372201054473976%")
  },
  ImageBackground_215_307: {
    width: wp("0.04269775624076526%"),
    minWidth: wp("0.04269775624076526%"),
    height: hp("5.616500729420146%"),
    minHeight: hp("5.616500729420146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.10824775695801%"),
    top: hp("43.11216594091525%")
  },
  ImageBackground_215_308: {
    width: wp("0.7724035779635111%"),
    minWidth: wp("0.7724035779635111%"),
    height: hp("5.315243351003511%"),
    minHeight: hp("5.315243351003511%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.74446233113606%"),
    top: hp("43.2621856856216%")
  },
  ImageBackground_215_309: {
    width: wp("1.4094356695810955%"),
    minWidth: wp("1.4094356695810955%"),
    height: hp("4.375187816515647%"),
    minHeight: hp("4.375187816515647%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.426475524902344%"),
    top: hp("43.73659227715166%")
  },
  ImageBackground_215_310: {
    width: wp("1.8759757280349731%"),
    minWidth: wp("1.8759757280349731%"),
    height: hp("2.9062070481764164%"),
    minHeight: hp("2.9062070481764164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.19408734639485%"),
    top: hp("44.467946870730884%")
  },
  ImageBackground_215_311: {
    width: wp("2.1162511905034385%"),
    minWidth: wp("2.1162511905034385%"),
    height: hp("1.0866927318885677%"),
    minHeight: hp("1.0866927318885677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.07399113972982%"),
    top: hp("45.370866952698066%")
  },
  ImageBackground_215_312: {
    width: wp("2.1162482102711997%"),
    minWidth: wp("2.1162482102711997%"),
    height: hp("1.086692797030256%"),
    minHeight: hp("1.086692797030256%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.07334582010905%"),
    top: hp("45.37273469518448%")
  },
  ImageBackground_215_313: {
    width: wp("1.875978906949361%"),
    minWidth: wp("1.875978906949361%"),
    height: hp("2.9062070481764164%"),
    minHeight: hp("2.9062070481764164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.1947898864746%"),
    top: hp("44.451137188353755%")
  },
  ImageBackground_215_314: {
    width: wp("1.4094175895055134%"),
    minWidth: wp("1.4094175895055134%"),
    height: hp("4.375237845332245%"),
    minHeight: hp("4.375237845332245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.426965077718094%"),
    top: hp("43.723317964480884%")
  },
  ImageBackground_215_315: {
    width: wp("0.7728906472524008%"),
    minWidth: wp("0.7728906472524008%"),
    height: hp("5.31647062041069%"),
    minHeight: hp("5.31647062041069%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.74370574951172%"),
    top: hp("43.247377155908566%")
  },
  ImageBackground_215_316: {
    width: wp("2.2254077593485513%"),
    minWidth: wp("2.2254077593485513%"),
    height: hp("5.837134585354498%"),
    minHeight: hp("5.837134585354498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.01689465840657%"),
    top: hp("42.99563215078547%")
  },
  ImageBackground_215_317: {
    width: wp("0.34158239761988324%"),
    minWidth: wp("0.34158239761988324%"),
    height: hp("0.8959555235065397%"),
    minHeight: hp("0.8959555235065397%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.92080624898275%"),
    top: hp("45.46512124316939%")
  },
  ImageBackground_215_318: {
    width: wp("0.23910810550053915%"),
    minWidth: wp("0.23910810550053915%"),
    height: hp("0.6271669773456178%"),
    minHeight: hp("0.6271669773456178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.97375106811523%"),
    top: hp("45.59953199709685%")
  },
  ImageBackground_215_319: {
    width: wp("0.08539509649078052%"),
    minWidth: wp("0.08539509649078052%"),
    height: hp("0.22398850631192732%"),
    minHeight: hp("0.22398850631192732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.04854774475098%"),
    top: hp("45.80765187414613%")
  },
  ImageBackground_215_320: {
    width: wp("2.1162511905034385%"),
    minWidth: wp("2.1162511905034385%"),
    height: hp("1.0866927318885677%"),
    minHeight: hp("1.0866927318885677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.183499018351235%"),
    top: hp("45.37133388831967%")
  },
  ImageBackground_215_321: {
    width: wp("2.1162511905034385%"),
    minWidth: wp("2.1162511905034385%"),
    height: hp("1.0866927318885677%"),
    minHeight: hp("1.0866927318885677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.18280283610026%"),
    top: hp("45.37300151553961%")
  },
  ImageBackground_215_322: {
    width: wp("0.04312254798909028%"),
    minWidth: wp("0.04312254798909028%"),
    height: hp("5.616500729420146%"),
    minHeight: hp("5.616500729420146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.17987251281738%"),
    top: hp("43.11216594091525%")
  },
  ImageBackground_215_323: {
    width: wp("0.7728283603986104%"),
    minWidth: wp("0.7728283603986104%"),
    height: hp("5.315243351003511%"),
    minHeight: hp("5.315243351003511%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.81565793355306%"),
    top: hp("43.2621856856216%")
  },
  ImageBackground_215_324: {
    width: wp("1.403643290201823%"),
    minWidth: wp("1.403643290201823%"),
    height: hp("4.397075944910935%"),
    minHeight: hp("4.397075944910935%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.5642344156901%"),
    top: hp("44.390368852459005%")
  },
  ImageBackground_215_325: {
    width: wp("1.8759757280349731%"),
    minWidth: wp("1.8759757280349731%"),
    height: hp("2.9062070481764164%"),
    minHeight: hp("2.9062070481764164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.26527976989746%"),
    top: hp("44.46241034836066%")
  },
  ImageBackground_215_326: {
    width: wp("2.116250197092692%"),
    minWidth: wp("2.116250197092692%"),
    height: hp("1.0866922107550616%"),
    minHeight: hp("1.0866922107550616%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.14615948994954%"),
    top: hp("45.37206764429652%")
  },
  ImageBackground_215_327: {
    width: wp("2.116100788116455%"),
    minWidth: wp("2.116100788116455%"),
    height: hp("1.0863442889979629%"),
    minHeight: hp("1.0863442889979629%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.14573033650716%"),
    top: hp("45.3687990949453%")
  },
  ImageBackground_215_328: {
    width: wp("1.8759757280349731%"),
    minWidth: wp("1.8759757280349731%"),
    height: hp("2.9062070481764164%"),
    minHeight: hp("2.9062070481764164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.265931447347%"),
    top: hp("44.453405161372984%")
  },
  ImageBackground_215_329: {
    width: wp("1.4094175895055134%"),
    minWidth: wp("1.4094175895055134%"),
    height: hp("4.375237845332245%"),
    minHeight: hp("4.375237845332245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.498345057169594%"),
    top: hp("43.718648608265084%")
  },
  ImageBackground_215_330: {
    width: wp("0.7728942732016245%"),
    minWidth: wp("0.7728942732016245%"),
    height: hp("5.31647478947874%"),
    minHeight: hp("5.31647478947874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.81426874796549%"),
    top: hp("43.24237427424862%")
  },
  ImageBackground_215_331: {
    width: wp("2.2254077593485513%"),
    minWidth: wp("2.2254077593485513%"),
    height: hp("5.837134585354498%"),
    minHeight: hp("5.837134585354498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.08851623535156%"),
    top: hp("42.99563215078547%")
  },
  ImageBackground_215_332: {
    width: wp("1.4474524060885112%"),
    minWidth: wp("1.4474524060885112%"),
    height: hp("3.6454073066919874%"),
    minHeight: hp("3.6454073066919874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.18596267700195%"),
    top: hp("42.274350025614694%")
  },
  ImageBackground_215_333: {
    width: wp("1.3270444671312969%"),
    minWidth: wp("1.3270444671312969%"),
    height: hp("3.330704162681038%"),
    minHeight: hp("3.330704162681038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.85977045694987%"),
    top: hp("42.589064634562874%")
  },
  ImageBackground_215_334: {
    width: wp("2.7796230713526406%"),
    minWidth: wp("2.7796230713526406%"),
    height: hp("3.6454073066919874%"),
    minHeight: hp("3.6454073066919874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.7397886912028%"),
    top: hp("42.274350025614694%")
  },
  ImageBackground_215_335: {
    width: wp("1.2467749913533528%"),
    minWidth: wp("1.2467749913533528%"),
    height: hp("5.0733326562766825%"),
    minHeight: hp("5.0733326562766825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.00362078348795%"),
    top: hp("40.049134968408566%")
  },
  ImageBackground_215_336: {
    width: wp("0.5388454596201578%"),
    minWidth: wp("0.5388454596201578%"),
    height: hp("0.4849364523027764%"),
    minHeight: hp("0.4849364523027764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.58900833129883%"),
    top: hp("42.274350025614694%")
  },
  ImageBackground_215_337: {
    width: wp("0.7002416749795278%"),
    minWidth: wp("0.7002416749795278%"),
    height: hp("0.32366465349666407%"),
    minHeight: hp("0.32366465349666407%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.98821385701497%"),
    top: hp("46.13150508025956%")
  },
  ImageBackground_215_338: {
    width: wp("0.6588287154833475%"),
    minWidth: wp("0.6588287154833475%"),
    height: hp("0.32366465349666407%"),
    minHeight: hp("0.32366465349666407%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.31655756632487%"),
    top: hp("46.13150508025956%")
  },
  ImageBackground_215_339: {
    width: wp("0.6592534979184469%"),
    minWidth: wp("0.6592534979184469%"),
    height: hp("0.3236578136193948%"),
    minHeight: hp("0.3236578136193948%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.91005770365397%"),
    top: hp("43.63066459614072%")
  },
  ImageBackground_215_340: {
    width: wp("1.6105582316716511%"),
    minWidth: wp("1.6105582316716511%"),
    height: hp("4.334173827874856%"),
    minHeight: hp("4.334173827874856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.14276059468587%"),
    top: hp("41.99105351349033%")
  },
  ImageBackground_215_341: {
    width: wp("0.6306467453638712%"),
    minWidth: wp("0.6306467453638712%"),
    height: hp("2.75952985377911%"),
    minHeight: hp("2.75952985377911%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.31655756632487%"),
    top: hp("43.617256873292376%")
  },
  ImageBackground_215_342: {
    width: wp("0.6507160266240438%"),
    minWidth: wp("0.6507160266240438%"),
    height: hp("4.91654495072495%"),
    minHeight: hp("4.91654495072495%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.58896827697754%"),
    top: hp("41.41318732923503%")
  },
  ImageBackground_215_343: {
    width: wp("0.4525968929131826%"),
    minWidth: wp("0.4525968929131826%"),
    height: hp("1.1871376975637968%"),
    minHeight: hp("1.1871376975637968%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.94720649719238%"),
    top: hp("45.699122694672155%")
  },
  ImageBackground_215_344: {
    width: wp("0.4525962471961975%"),
    minWidth: wp("0.4525962471961975%"),
    height: hp("1.1871376975637968%"),
    minHeight: hp("1.1871376975637968%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.945496241251625%"),
    top: hp("45.700323386270384%")
  },
  ImageBackground_215_345: {
    width: wp("0.9054327011108398%"),
    minWidth: wp("0.9054327011108398%"),
    height: hp("0.745979749439844%"),
    minHeight: hp("0.745979749439844%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.323579788208%"),
    top: hp("40.81957874402315%")
  },
  ImageBackground_215_346: {
    width: wp("1.7941580216089885%"),
    minWidth: wp("1.7941580216089885%"),
    height: hp("5.203242380110944%"),
    minHeight: hp("5.203242380110944%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.47665786743164%"),
    top: hp("40.85206412226785%")
  },
  ImageBackground_215_347: {
    width: wp("0.3415960818529129%"),
    minWidth: wp("0.3415960818529129%"),
    height: hp("0.8959914817184698%"),
    minHeight: hp("0.8959914817184698%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.992001851399735%"),
    top: hp("45.46505453808072%")
  },
  ImageBackground_215_348: {
    width: wp("0.23910741011301676%"),
    minWidth: wp("0.23910741011301676%"),
    height: hp("0.6271669773456178%"),
    minHeight: hp("0.6271669773456178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.04537264506022%"),
    top: hp("45.59953199709685%")
  },
  ImageBackground_215_349: {
    width: wp("0.08539629479249318%"),
    minWidth: wp("0.08539629479249318%"),
    height: hp("0.22413846247834587%"),
    minHeight: hp("0.22413846247834587%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.12016932169596%"),
    top: hp("45.80765187414613%")
  },
  ImageBackground_215_350: {
    width: wp("0.21220919986565906%"),
    minWidth: wp("0.21220919986565906%"),
    height: hp("0.7481266892021471%"),
    minHeight: hp("0.7481266892021471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.492435455322266%"),
    top: hp("40.10389984631149%")
  },
  ImageBackground_215_351: {
    width: wp("0.6827940543492634%"),
    minWidth: wp("0.6827940543492634%"),
    height: hp("1.3786473560854386%"),
    minHeight: hp("1.3786473560854386%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.04405275980631%"),
    top: hp("38.93922899590166%")
  },
  ImageBackground_215_352: {
    width: wp("0.39965299268563587%"),
    minWidth: wp("0.39965299268563587%"),
    height: hp("0.38413900495226916%"),
    minHeight: hp("0.38413900495226916%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.79774411519368%"),
    top: hp("38.9089448855874%")
  },
  ImageBackground_215_353: {
    width: wp("0.3587687015533447%"),
    minWidth: wp("0.3587687015533447%"),
    height: hp("0.9421500351911034%"),
    minHeight: hp("0.9421500351911034%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.84691174825032%"),
    top: hp("45.446844048838784%")
  },
  ImageBackground_215_354: {
    width: wp("0.12211496631304422%"),
    minWidth: wp("0.12211496631304422%"),
    height: hp("0.32030330981061755%"),
    minHeight: hp("0.32030330981061755%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.11244328816732%"),
    top: hp("46.13257236168033%")
  },
  ImageBackground_215_355: {
    width: wp("0.14346384753783542%"),
    minWidth: wp("0.14346384753783542%"),
    height: hp("0.19822493602669305%"),
    minHeight: hp("0.19822493602669305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.75634765625%"),
    top: hp("45.457316747780055%")
  },
  ImageBackground_215_356: {
    width: wp("0.12980284790198007%"),
    minWidth: wp("0.12980284790198007%"),
    height: hp("0.19822493602669305%"),
    minHeight: hp("0.19822493602669305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.626543045043945%"),
    top: hp("45.457316747780055%")
  },
  ImageBackground_215_357: {
    width: wp("2.971955339113871%"),
    minWidth: wp("2.971955339113871%"),
    height: hp("8.702466787536288%"),
    minHeight: hp("8.702466787536288%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.72550264994303%"),
    top: hp("31.449648330771765%")
  },
  ImageBackground_215_358: {
    width: wp("0.9705192844072977%"),
    minWidth: wp("0.9705192844072977%"),
    height: hp("6.627811369348745%"),
    minHeight: hp("6.627811369348745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.72779591878255%"),
    top: hp("33.42011665385928%")
  },
  ImageBackground_216_0: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("75.95628415300546%"),
    minHeight: hp("75.95628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.21285593835375494%")
  },
  View_224_1: {
    width: wp("72.81770706176758%"),
    minWidth: wp("72.81770706176758%"),
    height: hp("48.08743169398907%"),
    minHeight: hp("48.08743169398907%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.31249682108562%"),
    top: hp("38.79768079747271%")
  },
  View_182_10: {
    width: wp("12.604166666666666%"),
    minWidth: wp("12.604166666666666%"),
    height: hp("46.03825136612022%"),
    minHeight: hp("46.03825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.0491803278688394%")
  },
  View_182_1: {
    width: wp("8.229166666666666%"),
    minWidth: wp("8.229166666666666%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_182_1: {
    color: "rgba(20, 19, 97, 1)",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_2: {
    width: wp("2.7083333333333335%"),
    minWidth: wp("2.7083333333333335%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.177083333333332%"),
    top: hp("10.792349726776024%")
  },
  Text_182_2: {
    color: "rgba(115, 115, 137, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_5: {
    width: wp("4.791666666666667%"),
    minWidth: wp("4.791666666666667%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.177083333333332%"),
    top: hp("23.360655737704974%")
  },
  Text_182_5: {
    color: "rgba(115, 115, 137, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_7: {
    width: wp("7.864583333333333%"),
    minWidth: wp("7.864583333333333%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.177083333333332%"),
    top: hp("35.928961748633924%")
  },
  Text_182_7: {
    color: "rgba(115, 115, 137, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_4: {
    width: wp("5.520833333333333%"),
    minWidth: wp("5.520833333333333%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.177083333333332%"),
    top: hp("17.076502732240442%")
  },
  Text_182_4: {
    color: "rgba(32, 28, 254, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_6: {
    width: wp("3.4375000000000004%"),
    minWidth: wp("3.4375000000000004%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.177083333333332%"),
    top: hp("29.644808743169392%")
  },
  Text_182_6: {
    color: "rgba(115, 115, 137, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_8: {
    width: wp("9.427083333333334%"),
    minWidth: wp("9.427083333333334%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.177083333333332%"),
    top: hp("42.21311475409834%")
  },
  Text_182_8: {
    color: "rgba(115, 115, 137, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_188_8: {
    width: wp("1.6111110647519429%"),
    height: hp("2.185792349726776%"),
    top: hp("11.612021857923537%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_188_33: {
    width: wp("1.3692836960156758%"),
    height: hp("2.8688524590163933%"),
    top: hp("17.622950819672155%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26041666666666785%")
  },
  ImageBackground_188_46: {
    width: wp("1.138392686843872%"),
    height: hp("2.3224043715846996%"),
    top: hp("24.180327868852487%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.46875%")
  },
  ImageBackground_188_50: {
    width: wp("1.2133283416430156%"),
    height: hp("3.1420765027322406%"),
    top: hp("30.054644808743205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.41666666666666785%")
  },
  ImageBackground_188_108: {
    width: wp("1.3036723931630452%"),
    height: hp("3.551912568306011%"),
    top: hp("36.065573770491824%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.31250000000000355%")
  },
  View_188_123: {
    width: wp("1.40625%"),
    minWidth: wp("1.40625%"),
    height: hp("3.6885245901639343%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2083333333333357%"),
    top: hp("42.34972677595624%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_188_124: {
    width: wp("1.1728127797444663%"),
    height: hp("2.870042206811123%"),
    top: hp("0.40203157018447655%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11625130971272668%")
  },
  ImageBackground_188_125: {
    width: wp("0.16215225060780844%"),
    height: hp("0.9085923596158054%"),
    top: hp("1.9614631360997237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5095322926839181%")
  },
  ImageBackground_188_126: {
    width: wp("1.1728127797444663%"),
    height: hp("2.2315734071158317%"),
    top: hp("0.2901671362703837%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_188_129: {
    width: wp("0.3674999376138051%"),
    height: hp("1.6807513158829488%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6150007247924805%")
  },
  View_182_11: {
    width: wp("8.177083333333334%"),
    minWidth: wp("8.177083333333334%"),
    height: hp("33.46994535519126%"),
    minHeight: hp("33.46994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.281249999999996%"),
    top: hp("2.0491803278688394%")
  },
  View_182_12: {
    width: wp("7.447916666666667%"),
    minWidth: wp("7.447916666666667%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_182_12: {
    color: "rgba(20, 19, 97, 1)",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_13: {
    width: wp("5.364583333333333%"),
    minWidth: wp("5.364583333333333%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5625%"),
    top: hp("10.792349726776024%")
  },
  Text_182_13: {
    color: "rgba(115, 115, 137, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_14: {
    width: wp("6.614583333333333%"),
    minWidth: wp("6.614583333333333%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5625%"),
    top: hp("23.360655737704974%")
  },
  Text_182_14: {
    color: "rgba(115, 115, 137, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_16: {
    width: wp("6.5625%"),
    minWidth: wp("6.5625%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5625%"),
    top: hp("17.076502732240442%")
  },
  Text_182_16: {
    color: "rgba(32, 28, 254, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_17: {
    width: wp("4.270833333333333%"),
    minWidth: wp("4.270833333333333%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5625%"),
    top: hp("29.644808743169392%")
  },
  Text_182_17: {
    color: "rgba(115, 115, 137, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_188_139: {
    width: wp("0.32552083333333337%"),
    minWidth: wp("0.32552083333333337%"),
    height: hp("1.3661204791459882%"),
    minHeight: hp("1.3661204791459882%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1302083333333428%"),
    top: hp("12.29508196721315%")
  },
  ImageBackground_188_140: {
    width: wp("0.32552083333333337%"),
    minWidth: wp("0.32552083333333337%"),
    height: hp("1.3661204791459882%"),
    minHeight: hp("1.3661204791459882%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1302083333333428%"),
    top: hp("18.57923497267757%")
  },
  ImageBackground_188_141: {
    width: wp("0.32552083333333337%"),
    minWidth: wp("0.32552083333333337%"),
    height: hp("1.3661204791459882%"),
    minHeight: hp("1.3661204791459882%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1302083333333428%"),
    top: hp("24.7267759562842%")
  },
  ImageBackground_188_142: {
    width: wp("0.32552083333333337%"),
    minWidth: wp("0.32552083333333337%"),
    height: hp("1.3661204791459882%"),
    minHeight: hp("1.3661204791459882%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1302083333333428%"),
    top: hp("31.01092896174862%")
  },
  View_191_13: {
    width: wp("13.358386357625326%"),
    minWidth: wp("13.358386357625326%"),
    height: hp("25.81967213114754%"),
    minHeight: hp("25.81967213114754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.07291666666667%"),
    top: hp("2.0491803278688394%")
  },
  View_182_20: {
    width: wp("12.760416666666666%"),
    minWidth: wp("12.760416666666666%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_182_20: {
    color: "rgba(20, 19, 97, 1)",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_189_518: {
    width: wp("3.827135562896729%"),
    minWidth: wp("3.827135562896729%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15625%"),
    top: hp("11.748633879781437%")
  },
  View_189_519: {
    width: wp("3.827135562896729%"),
    minWidth: wp("3.827135562896729%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_191_9: {
    width: wp("3.827135562896729%"),
    minWidth: wp("3.827135562896729%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 247, 255, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  ImageBackground_189_516: {
    width: wp("3.827135562896729%"),
    minWidth: wp("3.827135562896729%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_189_520: {
    width: wp("3.8271363576253257%"),
    minWidth: wp("3.8271363576253257%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.84375%"),
    top: hp("11.748633879781437%")
  },
  View_191_0: {
    width: wp("3.8271363576253257%"),
    minWidth: wp("3.8271363576253257%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 247, 255, 1)",
    opacity: 0.699999988079071,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_191_8: {
    width: wp("3.8271363576253257%"),
    minWidth: wp("3.8271363576253257%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 247, 255, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  ImageBackground_189_515: {
    width: wp("3.8271363576253257%"),
    minWidth: wp("3.8271363576253257%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_191_1: {
    width: wp("3.8271363576253257%"),
    minWidth: wp("3.8271363576253257%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15625%"),
    top: hp("19.945355191256795%")
  },
  View_191_2: {
    width: wp("3.8271363576253257%"),
    minWidth: wp("3.8271363576253257%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 247, 255, 1)",
    opacity: 0.699999988079071,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_191_7: {
    width: wp("3.8271363576253257%"),
    minWidth: wp("3.8271363576253257%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 247, 255, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_189_514: {
    width: wp("3.8271363576253257%"),
    height: hp("5.8743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_189_18: {
    width: wp("2.925735116004944%"),
    minWidth: wp("2.925735116004944%"),
    height: hp("2.770797020750619%"),
    minHeight: hp("2.770797020750619%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6803862253824846%"),
    top: hp("1.6494834357922628%")
  },
  ImageBackground_189_20: {
    width: wp("0.45369982719421387%"),
    minWidth: wp("0.45369982719421387%"),
    height: hp("1.4467372268926904%"),
    minHeight: hp("1.4467372268926904%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.05396441683728881%")
  },
  ImageBackground_189_21: {
    width: wp("0.10747209191322327%"),
    minWidth: wp("0.10747209191322327%"),
    height: hp("1.4467372268926904%"),
    minHeight: hp("1.4467372268926904%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5031458536783902%"),
    top: hp("0.05396441683728881%")
  },
  ImageBackground_189_22: {
    width: wp("0.38088905314604443%"),
    minWidth: wp("0.38088905314604443%"),
    height: hp("1.5048978107223094%"),
    minHeight: hp("1.5048978107223094%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6514263153076243%"),
    top: hp("0.031017866290881102%")
  },
  ImageBackground_189_23: {
    width: wp("0.4256820182005564%"),
    minWidth: wp("0.4256820182005564%"),
    height: hp("1.5124384822741233%"),
    minHeight: hp("1.5124384822741233%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0659249623616631%"),
    top: hp("0.021278923326462973%")
  },
  ImageBackground_189_24: {
    width: wp("0.5298311511675518%"),
    minWidth: wp("0.5298311511675518%"),
    height: hp("1.4839490254720054%"),
    minHeight: hp("1.4839490254720054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.079521814982094%"),
    top: hp("0.05396441683728881%")
  },
  ImageBackground_189_25: {
    width: wp("0.30486499269803363%"),
    minWidth: wp("0.30486499269803363%"),
    height: hp("1.4467372268926904%"),
    minHeight: hp("1.4467372268926904%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6579697926839216%"),
    top: hp("0.05396441683728881%")
  },
  ImageBackground_189_26: {
    width: wp("0.40237151086330414%"),
    minWidth: wp("0.40237151086330414%"),
    height: hp("1.4467372268926904%"),
    minHeight: hp("1.4467372268926904%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0340417226155623%"),
    top: hp("0.05396441683728881%")
  },
  ImageBackground_189_27: {
    width: wp("0.5863658587137858%"),
    minWidth: wp("0.5863658587137858%"),
    height: hp("1.539328971195742%"),
    minHeight: hp("1.539328971195742%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5267117818196638%"),
    top: hp("0.012540556693920735%")
  },
  ImageBackground_189_28: {
    width: wp("0.5863658587137858%"),
    minWidth: wp("0.5863658587137858%"),
    height: hp("1.539328971195742%"),
    minHeight: hp("1.539328971195742%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5267117818196638%"),
    top: hp("0.012540556693920735%")
  },
  ImageBackground_189_30: {
    width: wp("0.6529193123181661%"),
    height: hp("1.7432341810132634%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.521892547607429%")
  },
  ImageBackground_189_435: {
    width: wp("0.03925780144830545%"),
    minWidth: wp("0.03925780144830545%"),
    height: hp("0.12718747710921074%"),
    minHeight: hp("0.12718747710921074%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4234046936035227%"),
    top: hp("0.06903976690568925%")
  },
  ImageBackground_189_436: {
    width: wp("0.08449377492070198%"),
    minWidth: wp("0.08449377492070198%"),
    height: hp("0.22181531444924774%"),
    minHeight: hp("0.22181531444924774%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3982626597086565%"),
    top: hp("0.021412333504031267%")
  },
  View_191_3: {
    width: wp("3.8271363576253257%"),
    minWidth: wp("3.8271363576253257%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.84375%"),
    top: hp("19.945355191256795%")
  },
  View_191_4: {
    width: wp("3.8271363576253257%"),
    minWidth: wp("3.8271363576253257%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 247, 255, 1)",
    opacity: 0.699999988079071,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_191_5: {
    width: wp("3.8271363576253257%"),
    minWidth: wp("3.8271363576253257%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 247, 255, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  ImageBackground_189_513: {
    width: wp("3.8271363576253257%"),
    minWidth: wp("3.8271363576253257%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_191_11: {
    width: wp("3.8271363576253257%"),
    minWidth: wp("3.8271363576253257%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.53125%"),
    top: hp("11.748633879781437%")
  },
  View_189_517: {
    width: wp("3.8271363576253257%"),
    minWidth: wp("3.8271363576253257%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 247, 255, 1)",
    opacity: 0.699999988079071,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_191_6: {
    width: wp("3.8271363576253257%"),
    minWidth: wp("3.8271363576253257%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 247, 255, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  ImageBackground_189_512: {
    width: wp("3.8271363576253257%"),
    minWidth: wp("3.8271363576253257%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_206_3: {
    width: wp("24.484375317891438%"),
    minWidth: wp("24.484375317891438%"),
    height: hp("39.849928558849896%"),
    minHeight: hp("39.849928558849896%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.33333333333334%"),
    top: hp("0%")
  },
  View_163_16: {
    width: wp("11.407504876454672%"),
    minWidth: wp("11.407504876454672%"),
    height: hp("7.240437158469945%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.583333333333329%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_163_17: {
    width: wp("10.363202095031738%"),
    height: hp("5.5655390838456285%"),
    top: hp("0.802528923326463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4755910237630161%")
  },
  View_191_14: {
    width: wp("24.484375317891438%"),
    minWidth: wp("24.484375317891438%"),
    height: hp("23.729507779814508%"),
    minHeight: hp("23.729507779814508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.12041869450138%")
  },
  View_188_155: {
    width: wp("14.427083333333332%"),
    minWidth: wp("14.427083333333332%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.052083333333329%"),
    top: hp("8.469945355191157%"),
    backgroundColor: "rgba(245, 247, 255, 1)",
    opacity: 0.699999988079071,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_188_157: {
    width: wp("3.4375000000000004%"),
    minWidth: wp("3.4375000000000004%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.781249999999986%"),
    top: hp("9.152805349214418%"),
    backgroundColor: "rgba(32, 28, 254, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  ImageBackground_204_0: {
    width: wp("24.484375317891438%"),
    height: hp("23.729507779814508%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_188_156: {
    width: wp("5.9375%"),
    minWidth: wp("5.9375%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.09375%"),
    top: hp("9.972677595628284%")
  },
  Text_188_156: {
    color: "rgba(115, 115, 137, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_188_159: {
    width: wp("1.09375%"),
    minWidth: wp("1.09375%"),
    height: hp("2.1616451075819674%"),
    minHeight: hp("2.1616451075819674%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.979166666666657%"),
    top: hp("10.792149611509558%")
  },
  View_191_17: {
    width: wp("2.34375%"),
    minWidth: wp("2.34375%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.3125%"),
    top: hp("13.797814207650276%")
  },
  View_191_15: {
    width: wp("2.34375%"),
    minWidth: wp("2.34375%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 247, 255, 1)",
    opacity: 0.699999988079071,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_191_16: {
    width: wp("0.6770833333333334%"),
    minWidth: wp("0.6770833333333334%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333286%"),
    top: hp("1.5027322404371262%")
  },
  Text_191_16: {
    color: "rgba(115, 115, 137, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_191_21: {
    width: wp("2.34375%"),
    minWidth: wp("2.34375%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.510416666666657%"),
    top: hp("13.797814207650276%")
  },
  View_191_22: {
    width: wp("2.34375%"),
    minWidth: wp("2.34375%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 247, 255, 1)",
    opacity: 0.699999988079071,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_191_23: {
    width: wp("1.1979166666666667%"),
    minWidth: wp("1.1979166666666667%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5729166666666714%"),
    top: hp("1.5027322404371262%")
  },
  Text_191_23: {
    color: "rgba(115, 115, 137, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_191_24: {
    width: wp("2.34375%"),
    minWidth: wp("2.34375%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.583333333333329%"),
    top: hp("13.797814207650276%")
  },
  View_191_25: {
    width: wp("2.34375%"),
    minWidth: wp("2.34375%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 247, 255, 1)",
    opacity: 0.699999988079071,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_191_26: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6770833333333428%"),
    top: hp("1.5027322404371262%")
  },
  Text_191_26: {
    color: "rgba(115, 115, 137, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_191_18: {
    width: wp("2.34375%"),
    minWidth: wp("2.34375%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.385416666666657%"),
    top: hp("13.797814207650276%")
  },
  View_191_19: {
    width: wp("2.34375%"),
    minWidth: wp("2.34375%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 247, 255, 1)",
    opacity: 0.699999988079071,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_191_20: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6770833333333428%"),
    top: hp("1.5027322404371262%")
  },
  Text_191_20: {
    color: "rgba(32, 28, 254, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_224_2: {
    width: wp("100.52083333333333%"),
    minWidth: wp("100.52083333333333%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.16666348775228%"),
    top: hp("123.906970414959%")
  },
  View_198_8: {
    width: wp("100.52083333333333%"),
    minWidth: wp("100.52083333333333%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_198_9: {
    width: wp("17.083333333333332%"),
    minWidth: wp("17.083333333333332%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.71875%"),
    top: hp("0.819672131147513%")
  },
  Text_198_9: {
    color: "rgba(115, 115, 137, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_163_11: {
    width: wp("126.92708333333333%"),
    minWidth: wp("126.92708333333333%"),
    height: hp("134.09323770491804%"),
    minHeight: hp("134.09323770491804%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.10416666666666667%"),
    top: hp("612.568306010929%")
  },
  View_163_10: {
    width: wp("101.14583333333333%"),
    minWidth: wp("101.14583333333333%"),
    height: hp("75.13661202185791%"),
    minHeight: hp("75.13661202185791%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38.661202185792376%")
  },
  View_163_0: {
    width: wp("101.14583333333333%"),
    minWidth: wp("101.14583333333333%"),
    height: hp("75.13661202185791%"),
    minHeight: hp("75.13661202185791%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(247, 247, 254, 1)"
  },
  View_162_118: {
    width: wp("65.625%"),
    minWidth: wp("65.625%"),
    height: hp("75.13661202185791%"),
    minHeight: hp("75.13661202185791%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.10416666666666667%"),
    top: hp("0%")
  },
  View_162_112: {
    width: wp("65.625%"),
    minWidth: wp("65.625%"),
    height: hp("75.13661202185791%"),
    minHeight: hp("75.13661202185791%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_162_113: {
    width: wp("65.625%"),
    minWidth: wp("65.625%"),
    height: hp("75.13661202185791%"),
    minHeight: hp("75.13661202185791%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_162_114: {
    width: wp("85.72916666666667%"),
    minWidth: wp("85.72916666666667%"),
    height: hp("147.6775956284153%"),
    minHeight: hp("147.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_162_115: {
    width: wp("35.451606114705406%"),
    minWidth: wp("35.451606114705406%"),
    height: hp("65.65141938423199%"),
    minHeight: hp("65.65141938423199%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.104166666666664%"),
    top: hp("81.96721311475414%")
  },
  ImageBackground_162_116: {
    width: wp("42.96875%"),
    minWidth: wp("42.96875%"),
    height: hp("50.54644808743169%"),
    minHeight: hp("50.54644808743169%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.6875%"),
    top: hp("38.25136612021856%")
  },
  ImageBackground_162_117: {
    width: wp("101.19791666666667%"),
    minWidth: wp("101.19791666666667%"),
    height: hp("78.00546448087432%"),
    minHeight: hp("78.00546448087432%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.427083333333332%"),
    top: hp("53.415300546448066%")
  },
  ImageBackground_162_120: {
    width: wp("25.624999999999996%"),
    minWidth: wp("25.624999999999996%"),
    height: hp("75.13661202185791%"),
    minHeight: hp("75.13661202185791%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.98958333333333%"),
    top: hp("0%")
  },
  ImageBackground_163_5: {
    width: wp("25.104166666666668%"),
    minWidth: wp("25.104166666666668%"),
    height: hp("75.13661202185791%"),
    minHeight: hp("75.13661202185791%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.03125%"),
    top: hp("0%")
  },
  View_163_9: {
    width: wp("37.447916666666664%"),
    minWidth: wp("37.447916666666664%"),
    height: hp("35.38251366120219%"),
    minHeight: hp("35.38251366120219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.041666666666664%"),
    top: hp("58.60655737704917%")
  },
  View_162_119: {
    width: wp("37.447916666666664%"),
    minWidth: wp("37.447916666666664%"),
    minHeight: hp("22.404371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_162_119: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 56,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_163_1: {
    width: wp("11.458333333333332%"),
    minWidth: wp("11.458333333333332%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26.63934426229514%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_163_2: {
    width: wp("10.416666666666668%"),
    minWidth: wp("10.416666666666668%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 247, 255, 0.800000011920929)"
  },
  View_163_3: {
    width: wp("5.208333333333334%"),
    minWidth: wp("5.208333333333334%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6041666666666696%"),
    top: hp("2.0491803278688394%")
  },
  Text_163_3: {
    color: "rgba(20, 19, 97, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_224_0: {
    width: wp("90.88541666666666%"),
    minWidth: wp("90.88541666666666%"),
    height: hp("134.09323770491804%"),
    minHeight: hp("134.09323770491804%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.041666666666664%"),
    top: hp("0%")
  },
  ImageBackground_223_148: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("18.496368491584487%"),
    minHeight: hp("18.496368491584487%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.32291666666667%"),
    top: hp("46.584699453551934%"),
    resizeMode: "cover"
  },
  ImageBackground_223_149: {
    width: wp("3.125%"),
    minWidth: wp("3.125%"),
    height: hp("6.633710600639302%"),
    minHeight: hp("6.633710600639302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.01041666666667%"),
    top: hp("57.377049180327845%"),
    resizeMode: "cover"
  },
  ImageBackground_225_0: {
    width: wp("90.88541666666666%"),
    minWidth: wp("90.88541666666666%"),
    height: hp("134.09323770491804%"),
    minHeight: hp("134.09323770491804%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_163_12: {
    width: wp("106.26237869262695%"),
    minWidth: wp("106.26237869262695%"),
    height: hp("90.65513402386442%"),
    minHeight: hp("90.65513402386442%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.7953109741210938%"),
    top: hp("430.8336601882685%")
  },
  View_227_3: {
    width: wp("106.26238505045573%"),
    minWidth: wp("106.26238505045573%"),
    height: hp("90.65513402386442%"),
    minHeight: hp("90.65513402386442%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_227_1: {
    width: wp("106.12165451049805%"),
    height: hp("90.65513402386442%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.14073053995768237%")
  },
  ImageBackground_143_61: {
    width: wp("102.06474304199217%"),
    minWidth: wp("102.06474304199217%"),
    height: hp("79.1530004615992%"),
    minHeight: hp("79.1530004615992%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.83203125%")
  },
  View_145_4: {
    width: wp("14.947916666666666%"),
    minWidth: wp("14.947916666666666%"),
    height: hp("38.25136612021858%"),
    minHeight: hp("38.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.99321492513021%"),
    top: hp("42.39065034793367%")
  },
  View_143_66: {
    width: wp("14.947916666666666%"),
    minWidth: wp("14.947916666666666%"),
    height: hp("38.25136612021858%"),
    minHeight: hp("38.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(236, 244, 255, 1)",
    opacity: 0.800000011920929,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_144_2: {
    width: wp("4.947916666666666%"),
    minWidth: wp("4.947916666666666%"),
    height: hp("15.027322404371585%"),
    minHeight: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5312499999999964%"),
    top: hp("3.5519125683060224%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_144_3: {
    flexGrow: 1,
    width: wp("5.625%"),
    height: hp("14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.36458333333333215%"),
    top: hp("0%")
  },
  ImageBackground_144_4: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    height: hp("14.754098360655737%"),
    minHeight: hp("14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_144_5: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    height: hp("14.754098360655737%"),
    minHeight: hp("14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_144_6: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    height: hp("14.754098360655737%"),
    minHeight: hp("14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.3348207473754883%"),
    top: hp("0%")
  },
  View_144_7: {
    flexGrow: 1,
    width: wp("5.625%"),
    height: hp("14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.36458333333333215%"),
    top: hp("0%")
  },
  ImageBackground_144_8: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    height: hp("14.754098360655737%"),
    minHeight: hp("14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_144_9: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    height: hp("14.754098360655737%"),
    minHeight: hp("14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_144_10: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    height: hp("14.754098360655737%"),
    minHeight: hp("14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_144_11: {
    flexGrow: 1,
    width: wp("5.625%"),
    height: hp("14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.36458333333333215%"),
    top: hp("0%")
  },
  ImageBackground_144_12: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    height: hp("14.754098360655737%"),
    minHeight: hp("14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_144_13: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    height: hp("14.754098360655737%"),
    minHeight: hp("14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_144_14: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    height: hp("14.754098360655737%"),
    minHeight: hp("14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_145_0: {
    width: wp("2.8125%"),
    minWidth: wp("2.8125%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.041666666666664%"),
    top: hp("21.174863387978178%")
  },
  Text_145_0: {
    color: "rgba(20, 19, 97, 1)",
    fontSize: 42,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_145_1: {
    width: wp("8.229166666666666%"),
    minWidth: wp("8.229166666666666%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333332%"),
    top: hp("27.59562841530061%")
  },
  Text_145_1: {
    color: "rgba(115, 115, 137, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_145_5: {
    width: wp("14.947916666666666%"),
    minWidth: wp("14.947916666666666%"),
    height: hp("38.25136612021858%"),
    minHeight: hp("38.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.545342763264976%"),
    top: hp("42.39065034793367%")
  },
  View_145_6: {
    width: wp("14.947916666666666%"),
    minWidth: wp("14.947916666666666%"),
    height: hp("38.25136612021858%"),
    minHeight: hp("38.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(236, 244, 255, 1)",
    opacity: 0.800000011920929,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_165_1: {
    width: wp("7.170141537984212%"),
    minWidth: wp("7.170141537984212%"),
    height: hp("16.9555413918417%"),
    minHeight: hp("16.9555413918417%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.906205495198563%"),
    top: hp("2.5955283576674333%")
  },
  View_145_8: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.635416666666664%"),
    top: hp("21.174863387978178%")
  },
  Text_145_8: {
    color: "rgba(20, 19, 97, 1)",
    fontSize: 42,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_145_9: {
    width: wp("5.677083333333333%"),
    minWidth: wp("5.677083333333333%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.635416666666664%"),
    top: hp("27.59562841530061%")
  },
  Text_145_9: {
    color: "rgba(115, 115, 137, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_145_22: {
    width: wp("14.947916666666666%"),
    minWidth: wp("14.947916666666666%"),
    height: hp("38.25136612021858%"),
    minHeight: hp("38.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.09745788574219%"),
    top: hp("42.39065034793367%")
  },
  View_145_23: {
    width: wp("14.947916666666666%"),
    minWidth: wp("14.947916666666666%"),
    height: hp("38.25136612021858%"),
    minHeight: hp("38.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(236, 244, 255, 1)",
    opacity: 0.800000011920929,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_145_25: {
    width: wp("7.5%"),
    minWidth: wp("7.5%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6979166666666643%"),
    top: hp("21.174863387978178%")
  },
  Text_145_25: {
    color: "rgba(20, 19, 97, 1)",
    fontSize: 42,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_145_26: {
    width: wp("8.75%"),
    minWidth: wp("8.75%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0729166666666714%"),
    top: hp("27.59562841530061%")
  },
  Text_145_26: {
    color: "rgba(115, 115, 137, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_198_0: {
    width: wp("5%"),
    height: hp("13.508180712090164%"),
    top: hp("4.400001067281437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.479101498921715%")
  },
  View_145_39: {
    width: wp("14.947916666666666%"),
    minWidth: wp("14.947916666666666%"),
    height: hp("38.25136612021858%"),
    minHeight: hp("38.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.64954121907552%"),
    top: hp("42.39065034793367%")
  },
  View_145_40: {
    width: wp("14.947916666666666%"),
    minWidth: wp("14.947916666666666%"),
    height: hp("38.25136612021858%"),
    minHeight: hp("38.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(236, 244, 255, 1)",
    opacity: 0.800000011920929,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_165_16: {
    width: wp("4.895833333333333%"),
    minWidth: wp("4.895833333333333%"),
    height: hp("12.978142076502733%"),
    minHeight: hp("12.978142076502733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.052083333333343%"),
    top: hp("4.508196721311492%")
  },
  View_145_42: {
    width: wp("3.75%"),
    minWidth: wp("3.75%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.572916666666671%"),
    top: hp("21.174863387978178%")
  },
  Text_145_42: {
    color: "rgba(20, 19, 97, 1)",
    fontSize: 42,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_145_43: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.010416666666671%"),
    top: hp("27.59562841530061%")
  },
  Text_145_43: {
    color: "rgba(115, 115, 137, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_149_7: {
    width: wp("20.677083333333332%"),
    minWidth: wp("20.677083333333332%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.99321492513021%"),
    top: hp("24.904311550119473%")
  },
  Text_149_7: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_162_111: {
    width: wp("67.91666666666667%"),
    minWidth: wp("67.91666666666667%"),
    height: hp("83.33333333333334%"),
    minHeight: hp("83.33333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.989583333333332%"),
    top: hp("532.5136278496414%")
  },
  View_158_34: {
    width: wp("31.354166666666668%"),
    minWidth: wp("31.354166666666668%"),
    height: hp("57.103825136612016%"),
    minHeight: hp("57.103825136612016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.10416666666666785%"),
    top: hp("26.22950819672144%")
  },
  ImageBackground_158_26: {
    width: wp("5.416666666666667%"),
    minWidth: wp("5.416666666666667%"),
    height: hp("14.207650273224044%"),
    minHeight: hp("14.207650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333357%"),
    top: hp("0.40983606557369967%")
  },
  View_158_5: {
    width: wp("28.4375%"),
    minWidth: wp("28.4375%"),
    height: hp("47.81420765027322%"),
    minHeight: hp("47.81420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0520833333333357%"),
    top: hp("9.28961748633867%")
  },
  View_158_32: {
    width: wp("28.4375%"),
    minWidth: wp("28.4375%"),
    height: hp("47.81420765027322%"),
    minHeight: hp("47.81420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_158_0: {
    width: wp("28.4375%"),
    minWidth: wp("28.4375%"),
    height: hp("43.44262295081967%"),
    minHeight: hp("43.44262295081967%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 0
  },
  ImageBackground_158_31: {
    width: wp("1.7187500000000002%"),
    minWidth: wp("1.7187500000000002%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43.30604428150616%")
  },
  View_158_1: {
    width: wp("28.4375%"),
    minWidth: wp("28.4375%"),
    height: hp("47.81420765027322%"),
    minHeight: hp("47.81420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_158_2: {
    width: wp("32.017437616984054%"),
    minWidth: wp("32.017437616984054%"),
    height: hp("84.32458762914106%"),
    minHeight: hp("84.32458762914106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.088898022969563%"),
    top: hp("28.095516350751268%")
  },
  ImageBackground_158_3: {
    width: wp("40.477294921875%"),
    minWidth: wp("40.477294921875%"),
    height: hp("105.9904671757599%"),
    minHeight: hp("105.9904671757599%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8904819488525386%"),
    top: hp("16.737640881147513%")
  },
  ImageBackground_158_6: {
    width: wp("21.99152946472168%"),
    minWidth: wp("21.99152946472168%"),
    height: hp("53.478428574859116%"),
    minHeight: hp("53.478428574859116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.669825871785482%"),
    top: hp("58.95078898779025%")
  },
  ImageBackground_158_4: {
    width: wp("56.260484059651695%"),
    minWidth: wp("56.260484059651695%"),
    height: hp("148.0007651073685%"),
    minHeight: hp("148.0007651073685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0429827372233071%"),
    top: hp("2.2341535391051366%")
  },
  View_158_7: {
    width: wp("29.739583333333336%"),
    minWidth: wp("29.739583333333336%"),
    height: hp("42.62295081967213%"),
    minHeight: hp("42.62295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6145833333333357%"),
    top: hp("5.737704918032705%"),
    backgroundColor: "rgba(236, 244, 255, 1)",
    opacity: 0.800000011920929,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_158_11: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("20.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.75%"),
    top: hp("15.027322404371489%")
  },
  Text_158_11: {
    color: "rgba(48, 48, 53, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_158_12: {
    width: wp("6.302083333333333%"),
    minWidth: wp("6.302083333333333%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.75%"),
    top: hp("39.75409836065569%")
  },
  Text_158_12: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_158_20: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("13.114754098360656%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_158_13: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("13.114754098360656%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_158_16: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("13.114754098360656%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_158_18: {
    width: wp("8.440513610839844%"),
    minWidth: wp("8.440513610839844%"),
    height: hp("22.218053849017032%"),
    minHeight: hp("22.218053849017032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6202030181884783%"),
    top: hp("2.2188447212261053%")
  },
  ImageBackground_158_19: {
    width: wp("10.045278072357178%"),
    minWidth: wp("10.045278072357178%"),
    height: hp("26.42545439506489%"),
    minHeight: hp("26.42545439506489%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_158_24: {
    width: wp("1.875%"),
    minWidth: wp("1.875%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5625%"),
    top: hp("4.918032786885192%")
  },
  View_158_36: {
    width: wp("31.354166666666668%"),
    minWidth: wp("31.354166666666668%"),
    height: hp("57.103825136612016%"),
    minHeight: hp("57.103825136612016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.5625%"),
    top: hp("26.22950819672144%")
  },
  ImageBackground_158_37: {
    width: wp("5.416666666666667%"),
    minWidth: wp("5.416666666666667%"),
    height: hp("14.207650273224044%"),
    minHeight: hp("14.207650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333286%"),
    top: hp("0.40983606557369967%")
  },
  View_158_38: {
    width: wp("28.4375%"),
    minWidth: wp("28.4375%"),
    height: hp("47.81420765027322%"),
    minHeight: hp("47.81420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.052083333333328596%"),
    top: hp("9.28961748633867%")
  },
  View_158_39: {
    width: wp("28.4375%"),
    minWidth: wp("28.4375%"),
    height: hp("47.81420765027322%"),
    minHeight: hp("47.81420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_158_40: {
    width: wp("28.4375%"),
    minWidth: wp("28.4375%"),
    height: hp("43.44262295081967%"),
    minHeight: hp("43.44262295081967%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 0
  },
  ImageBackground_158_41: {
    width: wp("1.7187500000000002%"),
    minWidth: wp("1.7187500000000002%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43.30604428150616%")
  },
  View_158_42: {
    width: wp("28.4375%"),
    minWidth: wp("28.4375%"),
    height: hp("47.81420765027322%"),
    minHeight: hp("47.81420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_158_43: {
    width: wp("35.95213254292806%"),
    minWidth: wp("35.95213254292806%"),
    height: hp("93.16629712047472%"),
    minHeight: hp("93.16629712047472%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.005769411722824%"),
    top: hp("23.164275956284087%")
  },
  ImageBackground_158_44: {
    width: wp("34.44002151489258%"),
    minWidth: wp("34.44002151489258%"),
    height: hp("91.75145717266479%"),
    minHeight: hp("91.75145717266479%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.667247990767166%"),
    top: hp("7.351534483862679%")
  },
  ImageBackground_158_45: {
    width: wp("28.183244069417317%"),
    minWidth: wp("28.183244069417317%"),
    height: hp("66.31987941721098%"),
    minHeight: hp("66.31987941721098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.318101485570274%"),
    top: hp("56.32614385886268%")
  },
  ImageBackground_158_46: {
    width: wp("56.260484059651695%"),
    minWidth: wp("56.260484059651695%"),
    height: hp("148.0007651073685%"),
    minHeight: hp("148.0007651073685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.053333600362144%"),
    top: hp("4.2543838584357445%")
  },
  View_158_47: {
    width: wp("29.739583333333336%"),
    minWidth: wp("29.739583333333336%"),
    height: hp("42.62295081967213%"),
    minHeight: hp("42.62295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6145833333333286%"),
    top: hp("5.737704918032705%"),
    backgroundColor: "rgba(236, 244, 255, 1)",
    opacity: 0.800000011920929,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_158_48: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("20.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.749999999999993%"),
    top: hp("15.027322404371489%")
  },
  Text_158_48: {
    color: "rgba(48, 48, 53, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_158_49: {
    width: wp("7.135416666666666%"),
    minWidth: wp("7.135416666666666%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.749999999999993%"),
    top: hp("39.75409836065569%")
  },
  Text_158_49: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_158_50: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("13.114754098360656%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_158_51: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("13.114754098360656%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_158_52: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("13.114754098360656%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_158_54: {
    width: wp("8.991267681121826%"),
    minWidth: wp("8.991267681121826%"),
    height: hp("23.342149244631575%"),
    minHeight: hp("23.342149244631575%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.37156105041503906%"),
    top: hp("1.4879237107240897%")
  },
  ImageBackground_158_55: {
    width: wp("10.045278072357178%"),
    minWidth: wp("10.045278072357178%"),
    height: hp("26.42545439506489%"),
    minHeight: hp("26.42545439506489%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.023303826649978987%"),
    top: hp("0.0499287589651658%")
  },
  ImageBackground_158_56: {
    width: wp("1.875%"),
    minWidth: wp("1.875%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5625%"),
    top: hp("4.918032786885192%")
  },
  View_206_11: {
    width: wp("11.770833333333334%"),
    minWidth: wp("11.770833333333334%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.302083333333332%"),
    top: hp("0.6830934618340052%"),
    borderColor: "rgba(251, 178, 49, 1)",
    borderWidth: 2
  },
  View_162_94: {
    width: wp("23.489583333333332%"),
    minWidth: wp("23.489583333333332%"),
    minHeight: hp("15.846994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_162_94: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_162_109: {
    width: wp("3.6458333333333335%"),
    minWidth: wp("3.6458333333333335%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.10416666666667%"),
    top: hp("7.1038251366121585%")
  },
  View_162_102: {
    width: wp("3.6458333333333335%"),
    minWidth: wp("3.6458333333333335%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 247, 255, 0.699999988079071)"
  },
  ImageBackground_162_105: {
    width: wp("1.7708333333333333%"),
    height: hp("4.644808743169399%"),
    top: hp("1.775956284152926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9375%")
  },
  View_162_110: {
    width: wp("3.6458333333333335%"),
    minWidth: wp("3.6458333333333335%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.27083333333334%"),
    top: hp("7.1038251366121585%")
  },
  View_162_100: {
    width: wp("3.6458333333333335%"),
    minWidth: wp("3.6458333333333335%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(32, 28, 254, 1)"
  },
  ImageBackground_162_103: {
    width: wp("1.7708333333333333%"),
    height: hp("4.644808743169399%"),
    top: hp("1.775956284152926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9375%")
  },
  View_139_64: {
    width: wp("111.66666666666667%"),
    minWidth: wp("111.66666666666667%"),
    height: hp("262.1584699453552%"),
    minHeight: hp("262.1584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.5625%"),
    top: hp("301.91256830601094%")
  },
  ImageBackground_127_1: {
    width: wp("45.729166666666664%"),
    minWidth: wp("45.729166666666664%"),
    height: hp("71.44808743169399%"),
    minHeight: hp("71.44808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.9375%"),
    top: hp("33.60655737704917%")
  },
  ImageBackground_139_58: {
    width: wp("102.60416666666667%"),
    minWidth: wp("102.60416666666667%"),
    height: hp("121.5846994535519%"),
    minHeight: hp("121.5846994535519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.885245901639337%")
  },
  View_133_230: {
    width: wp("52.27545738220215%"),
    minWidth: wp("52.27545738220215%"),
    height: hp("125.00087550429046%"),
    minHeight: hp("125.00087550429046%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4443219502766924%"),
    top: hp("22.540983606557404%")
  },
  ImageBackground_214_30: {
    width: wp("41.48104349772135%"),
    minWidth: wp("41.48104349772135%"),
    height: hp("90.98453209048412%"),
    minHeight: hp("90.98453209048412%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4451033274332685%"),
    top: hp("21.257944576075772%")
  },
  ImageBackground_133_233: {
    width: wp("52.27545738220215%"),
    minWidth: wp("52.27545738220215%"),
    height: hp("125.00087550429046%"),
    minHeight: hp("125.00087550429046%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_132_16: {
    width: wp("27.187499999999996%"),
    minWidth: wp("27.187499999999996%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.96875%"),
    top: hp("31.42076502732243%")
  },
  View_120_57: {
    width: wp("26.510416666666664%"),
    minWidth: wp("26.510416666666664%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_120_57: {
    color: "rgba(20, 19, 97, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_128_6: {
    width: wp("10.104166666666666%"),
    minWidth: wp("10.104166666666666%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.510416666666664%"),
    top: hp("7.5136612021857445%")
  },
  ImageBackground_197_3: {
    width: wp("10.104166666666666%"),
    minWidth: wp("10.104166666666666%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.083333333333336%"),
    top: hp("8.060109289617458%")
  },
  View_132_17: {
    width: wp("37.23958333333333%"),
    minWidth: wp("37.23958333333333%"),
    height: hp("136.61202185792348%"),
    minHeight: hp("136.61202185792348%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.020833333333332%"),
    top: hp("5.327868852459005%")
  },
  View_128_7: {
    width: wp("31.25%"),
    minWidth: wp("31.25%"),
    height: hp("26.229508196721312%"),
    minHeight: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.739583333333336%"),
    top: hp("46.31147540983608%"),
    backgroundColor: "rgba(245, 247, 255, 1)",
    opacity: 0.699999988079071,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_128_8: {
    width: wp("4.6875%"),
    minWidth: wp("4.6875%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.40625%"),
    top: hp("50.40983606557376%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_132_15: {
    width: wp("19.791666666666664%"),
    minWidth: wp("19.791666666666664%"),
    height: hp("16.80327868852459%"),
    minHeight: hp("16.80327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.385416666666668%"),
    top: hp("50.40983606557376%")
  },
  View_128_9: {
    width: wp("14.21875%"),
    minWidth: wp("14.21875%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_128_9: {
    color: "rgba(20, 19, 97, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_131_0: {
    width: wp("19.791666666666664%"),
    minWidth: wp("19.791666666666664%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.147540983606575%")
  },
  Text_131_0: {
    color: "rgba(115, 115, 137, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_132_134: {
    width: wp("37.23958333333333%"),
    minWidth: wp("37.23958333333333%"),
    height: hp("136.61202185792348%"),
    minHeight: hp("136.61202185792348%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_132_135: {
    flexGrow: 1,
    width: wp("4.166666666666666%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666668%"),
    top: hp("51.09289617486343%")
  },
  ImageBackground_132_136: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_132_137: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_132_138: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_132_139: {
    flexGrow: 1,
    width: wp("4.166666666666666%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666668%"),
    top: hp("51.09289617486343%")
  },
  ImageBackground_132_140: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_132_141: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_132_142: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_132_143: {
    flexGrow: 1,
    width: wp("4.166666666666666%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666668%"),
    top: hp("51.09289617486343%")
  },
  ImageBackground_132_144: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_132_145: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_132_146: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_132_147: {
    flexGrow: 1,
    width: wp("4.166666666666666%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666668%"),
    top: hp("51.09289617486343%")
  },
  ImageBackground_132_148: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_132_149: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_132_150: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_132_151: {
    flexGrow: 1,
    width: wp("4.166666666666666%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666668%"),
    top: hp("51.09289617486343%")
  },
  ImageBackground_132_152: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_132_153: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_132_154: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_132_155: {
    flexGrow: 1,
    width: wp("4.166666666666666%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666668%"),
    top: hp("51.09289617486343%")
  },
  ImageBackground_132_156: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_132_157: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_132_158: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_132_55: {
    width: wp("59.166666666666664%"),
    minWidth: wp("59.166666666666664%"),
    height: hp("136.61202185792348%"),
    minHeight: hp("136.61202185792348%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.302083333333336%"),
    top: hp("55.87431693989072%")
  },
  View_132_56: {
    width: wp("31.25%"),
    minWidth: wp("31.25%"),
    height: hp("26.229508196721312%"),
    minHeight: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.854166666666666%"),
    top: hp("28.278688524590166%"),
    backgroundColor: "rgba(245, 247, 255, 1)",
    opacity: 0.699999988079071,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_132_57: {
    width: wp("4.6875%"),
    minWidth: wp("4.6875%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.520833333333334%"),
    top: hp("32.377049180327845%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_132_58: {
    width: wp("19.791666666666664%"),
    minWidth: wp("19.791666666666664%"),
    height: hp("16.80327868852459%"),
    minHeight: hp("16.80327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.499999999999998%"),
    top: hp("32.377049180327845%")
  },
  View_132_59: {
    width: wp("13.125%"),
    minWidth: wp("13.125%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_132_59: {
    color: "rgba(20, 19, 97, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_132_60: {
    width: wp("19.791666666666664%"),
    minWidth: wp("19.791666666666664%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.147540983606575%")
  },
  Text_132_60: {
    color: "rgba(115, 115, 137, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_133_238: {
    width: wp("59.166666666666664%"),
    minWidth: wp("59.166666666666664%"),
    height: hp("136.61202185792348%"),
    minHeight: hp("136.61202185792348%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_133_239: {
    flexGrow: 1,
    width: wp("3.854166666666667%"),
    height: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.989583333333334%"),
    top: hp("33.469945355191214%")
  },
  ImageBackground_133_240: {
    width: wp("3.854166666666667%"),
    minWidth: wp("3.854166666666667%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_133_241: {
    width: wp("3.854166666666667%"),
    minWidth: wp("3.854166666666667%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_133_242: {
    width: wp("3.854166666666667%"),
    minWidth: wp("3.854166666666667%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_133_243: {
    flexGrow: 1,
    width: wp("3.854166666666667%"),
    height: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.989583333333334%"),
    top: hp("33.469945355191214%")
  },
  ImageBackground_133_244: {
    width: wp("3.854166666666667%"),
    minWidth: wp("3.854166666666667%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_133_245: {
    width: wp("3.854166666666667%"),
    minWidth: wp("3.854166666666667%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_133_246: {
    width: wp("3.854166666666667%"),
    minWidth: wp("3.854166666666667%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_133_247: {
    flexGrow: 1,
    width: wp("3.854166666666667%"),
    height: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.989583333333334%"),
    top: hp("33.469945355191214%")
  },
  ImageBackground_133_248: {
    width: wp("3.854166666666667%"),
    minWidth: wp("3.854166666666667%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_133_249: {
    width: wp("3.854166666666667%"),
    minWidth: wp("3.854166666666667%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_133_250: {
    width: wp("3.854166666666667%"),
    minWidth: wp("3.854166666666667%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_132_18: {
    width: wp("56.770833333333336%"),
    minWidth: wp("56.770833333333336%"),
    height: hp("229.64480874316942%"),
    minHeight: hp("229.64480874316942%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.35416666666667%"),
    top: hp("0%")
  },
  View_132_19: {
    width: wp("31.25%"),
    minWidth: wp("31.25%"),
    height: hp("26.229508196721312%"),
    minHeight: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.260416666666657%"),
    top: hp("51.63934426229508%"),
    backgroundColor: "rgba(245, 247, 255, 1)",
    opacity: 0.699999988079071,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_132_20: {
    width: wp("4.6875%"),
    minWidth: wp("4.6875%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.927083333333329%"),
    top: hp("55.73770491803276%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_132_21: {
    width: wp("19.791666666666664%"),
    minWidth: wp("19.791666666666664%"),
    height: hp("16.80327868852459%"),
    minHeight: hp("16.80327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.90625%"),
    top: hp("55.73770491803276%")
  },
  View_132_22: {
    width: wp("13.802083333333334%"),
    minWidth: wp("13.802083333333334%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_132_22: {
    color: "rgba(20, 19, 97, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_132_23: {
    width: wp("19.791666666666664%"),
    minWidth: wp("19.791666666666664%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.147540983606575%")
  },
  Text_132_23: {
    color: "rgba(115, 115, 137, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_132_24: {
    width: wp("56.770833333333336%"),
    minWidth: wp("56.770833333333336%"),
    height: hp("229.64480874316942%"),
    minHeight: hp("229.64480874316942%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_132_25: {
    width: wp("52.083333333333336%"),
    minWidth: wp("52.083333333333336%"),
    height: hp("136.61202185792348%"),
    minHeight: hp("136.61202185792348%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.6875%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I132_25_131_7: {
    flexGrow: 1,
    width: wp("4.166666666666666%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5520833333333215%"),
    top: hp("55.87431693989072%")
  },
  ImageBackground_I132_25_131_8: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I132_25_131_9: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I132_25_131_10: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I132_25_131_11: {
    flexGrow: 1,
    width: wp("4.166666666666666%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5520833333333215%"),
    top: hp("55.87431693989072%")
  },
  ImageBackground_I132_25_131_12: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I132_25_131_13: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I132_25_131_14: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I132_25_131_15: {
    flexGrow: 1,
    width: wp("4.166666666666666%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5520833333333215%"),
    top: hp("55.87431693989072%")
  },
  ImageBackground_I132_25_131_16: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I132_25_131_17: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I132_25_131_18: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I132_25_131_19: {
    flexGrow: 1,
    width: wp("4.166666666666666%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5520833333333215%"),
    top: hp("55.87431693989072%")
  },
  ImageBackground_I132_25_131_20: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I132_25_131_21: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I132_25_131_22: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I132_25_132_2: {
    flexGrow: 1,
    width: wp("0.925000011920929%"),
    height: hp("2.4262295394647317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.0604168574015205%"),
    top: hp("62.27867251536884%")
  },
  ImageBackground_I132_25_132_3: {
    width: wp("0.925000011920929%"),
    minWidth: wp("0.925000011920929%"),
    height: hp("2.4262295394647317%"),
    minHeight: hp("2.4262295394647317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I132_25_132_4: {
    width: wp("0.925000011920929%"),
    minWidth: wp("0.925000011920929%"),
    height: hp("2.4262295394647317%"),
    minHeight: hp("2.4262295394647317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I132_25_132_5: {
    width: wp("0.925000011920929%"),
    minWidth: wp("0.925000011920929%"),
    height: hp("2.4262295394647317%"),
    minHeight: hp("2.4262295394647317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I132_25_132_6: {
    flexGrow: 1,
    width: wp("0.925000011920929%"),
    height: hp("2.4262295394647317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.0604168574015205%"),
    top: hp("62.27867251536884%")
  },
  ImageBackground_I132_25_132_7: {
    width: wp("0.925000011920929%"),
    minWidth: wp("0.925000011920929%"),
    height: hp("2.4262295394647317%"),
    minHeight: hp("2.4262295394647317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I132_25_132_8: {
    width: wp("0.925000011920929%"),
    minWidth: wp("0.925000011920929%"),
    height: hp("2.4262295394647317%"),
    minHeight: hp("2.4262295394647317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I132_25_132_9: {
    width: wp("0.925000011920929%"),
    minWidth: wp("0.925000011920929%"),
    height: hp("2.4262295394647317%"),
    minHeight: hp("2.4262295394647317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I132_25_132_10: {
    flexGrow: 1,
    width: wp("0.925000011920929%"),
    height: hp("2.4262295394647317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.0604168574015205%"),
    top: hp("62.27867251536884%")
  },
  ImageBackground_I132_25_132_11: {
    width: wp("0.925000011920929%"),
    minWidth: wp("0.925000011920929%"),
    height: hp("2.4262295394647317%"),
    minHeight: hp("2.4262295394647317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I132_25_132_12: {
    width: wp("0.925000011920929%"),
    minWidth: wp("0.925000011920929%"),
    height: hp("2.4262295394647317%"),
    minHeight: hp("2.4262295394647317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I132_25_132_13: {
    width: wp("0.925000011920929%"),
    minWidth: wp("0.925000011920929%"),
    height: hp("2.4262295394647317%"),
    minHeight: hp("2.4262295394647317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_132_26: {
    width: wp("45.208333333333336%"),
    height: hp("130.87431693989072%"),
    minHeight: hp("130.87431693989072%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("98.77049180327867%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_132_64: {
    width: wp("45.208333333333336%"),
    minWidth: wp("45.208333333333336%"),
    height: hp("178.0054644808743%"),
    minHeight: hp("178.0054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.75%"),
    top: hp("84.15300546448088%")
  },
  View_132_65: {
    width: wp("31.25%"),
    minWidth: wp("31.25%"),
    height: hp("26.229508196721312%"),
    minHeight: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.260416666666671%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 247, 255, 1)",
    opacity: 0.699999988079071,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_132_66: {
    width: wp("4.6875%"),
    minWidth: wp("4.6875%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.927083333333336%"),
    top: hp("4.098360655737679%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_132_67: {
    width: wp("19.791666666666664%"),
    minWidth: wp("19.791666666666664%"),
    height: hp("16.80327868852459%"),
    minHeight: hp("16.80327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.90625%"),
    top: hp("4.098360655737679%")
  },
  View_132_68: {
    width: wp("16.09375%"),
    minWidth: wp("16.09375%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_132_68: {
    color: "rgba(20, 19, 97, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_132_69: {
    width: wp("19.791666666666664%"),
    minWidth: wp("19.791666666666664%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.147540983606575%")
  },
  Text_132_69: {
    color: "rgba(115, 115, 137, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_132_70: {
    width: wp("45.208333333333336%"),
    minWidth: wp("45.208333333333336%"),
    height: hp("175.81967213114754%"),
    minHeight: hp("175.81967213114754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.1857923497267393%")
  },
  View_197_7: {
    width: wp("5.104166666666667%"),
    minWidth: wp("5.104166666666667%"),
    height: hp("13.387978142076504%"),
    minHeight: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666671%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_197_8: {
    flexGrow: 1,
    width: wp("4.375%"),
    height: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4687499999999929%"),
    top: hp("2.0491803278688963%")
  },
  ImageBackground_197_9: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_197_10: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_197_11: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_197_12: {
    flexGrow: 1,
    width: wp("4.375%"),
    height: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4687499999999929%"),
    top: hp("2.0491803278688963%")
  },
  ImageBackground_197_13: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_197_14: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_197_15: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_197_16: {
    flexGrow: 1,
    width: wp("4.375%"),
    height: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4687499999999929%"),
    top: hp("2.0491803278688963%")
  },
  ImageBackground_197_17: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_197_18: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_197_19: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_197_20: {
    flexGrow: 1,
    width: wp("4.375%"),
    height: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4687499999999929%"),
    top: hp("2.0491803278688963%")
  },
  ImageBackground_197_21: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_197_22: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_197_23: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_132_72: {
    width: wp("45.208333333333336%"),
    height: hp("130.87431693989072%"),
    minHeight: hp("130.87431693989072%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44.94535519125685%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_123_97: {
    width: wp("150.9100341796875%"),
    minWidth: wp("150.9100341796875%"),
    height: hp("236.1730023160007%"),
    minHeight: hp("236.1730023160007%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-21.57107671101888%"),
    top: hp("111.82776279136783%")
  },
  View_123_49: {
    width: wp("81.5625%"),
    minWidth: wp("81.5625%"),
    height: hp("101.63934426229508%"),
    minHeight: hp("101.63934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.383576711018879%"),
    top: hp("30.795188028304295%")
  },
  ImageBackground_123_42: {
    width: wp("81.5625%"),
    minWidth: wp("81.5625%"),
    height: hp("101.63934426229508%"),
    minHeight: hp("101.63934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_123_45: {
    width: wp("81.5625%"),
    minWidth: wp("81.5625%"),
    height: hp("101.63934426229508%"),
    minHeight: hp("101.63934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_128_5: {
    width: wp("18.385416666666668%"),
    minWidth: wp("18.385416666666668%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.76899337768555%"),
    top: hp("51.1503792851349%")
  },
  View_112_1: {
    width: wp("26.875%"),
    minWidth: wp("26.875%"),
    minHeight: hp("15.846994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.61274337768555%"),
    top: hp("43.90994212666496%")
  },
  Text_112_1: {
    color: "rgba(20, 19, 97, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_118_15: {
    width: wp("57.20655441284179%"),
    minWidth: wp("57.20655441284179%"),
    height: hp("150.0273324101349%"),
    minHeight: hp("150.0273324101349%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("86.14565322959359%")
  },
  ImageBackground_118_10: {
    width: wp("29.753325780232746%"),
    minWidth: wp("29.753325780232746%"),
    height: hp("78.7476586513832%"),
    minHeight: hp("78.7476586513832%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.838162740071613%"),
    top: hp("33.00185907082479%")
  },
  ImageBackground_118_13: {
    width: wp("25.06255149841309%"),
    minWidth: wp("25.06255149841309%"),
    height: hp("66.33266594891991%"),
    minHeight: hp("66.33266594891991%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.030335744222002%"),
    top: hp("15.8835656004525%")
  },
  ImageBackground_118_14: {
    width: wp("56.260484059651695%"),
    minWidth: wp("56.260484059651695%"),
    height: hp("148.0007651073685%"),
    minHeight: hp("148.0007651073685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.946076711018879%"),
    top: hp("2.026567302766381%")
  },
  View_119_48: {
    width: wp("71.88011169433594%"),
    minWidth: wp("71.88011169433594%"),
    height: hp("178.97704077548667%"),
    minHeight: hp("178.97704077548667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.02991612752278%"),
    top: hp("0%")
  },
  ImageBackground_119_49: {
    width: wp("33.13844680786133%"),
    minWidth: wp("33.13844680786133%"),
    height: hp("92.07622757374915%"),
    minHeight: hp("92.07622757374915%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.12476793924968%"),
    top: hp("30.112386401233778%")
  },
  ImageBackground_119_50: {
    width: wp("35.15382448832194%"),
    minWidth: wp("35.15382448832194%"),
    height: hp("92.63017998367059%"),
    minHeight: hp("92.63017998367059%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.482086181640625%"),
    top: hp("48.649947369684924%")
  },
  ImageBackground_119_51: {
    width: wp("71.88011169433594%"),
    minWidth: wp("71.88011169433594%"),
    height: hp("178.97704077548667%"),
    minHeight: hp("178.97704077548667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_119_11: {
    width: wp("20.3125%"),
    minWidth: wp("20.3125%"),
    height: hp("51.91256830601093%"),
    minHeight: hp("51.91256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.71691004435222%"),
    top: hp("69.45639021409664%")
  },
  View_114_2: {
    width: wp("20.3125%"),
    minWidth: wp("20.3125%"),
    height: hp("51.91256830601093%"),
    minHeight: hp("51.91256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 247, 255, 1)",
    opacity: 0.800000011920929,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 3,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_119_7: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("51.09289617486339%"),
    minHeight: hp("51.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15624999999999645%"),
    top: hp("0.4098360655737565%")
  },
  View_119_2: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("51.09289617486339%"),
    minHeight: hp("51.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 247, 255, 1)",
    opacity: 0.800000011920929,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_119_3: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("51.09289617486339%"),
    minHeight: hp("51.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_119_4: {
    width: wp("22.69749641418457%"),
    minWidth: wp("22.69749641418457%"),
    height: hp("60.07311044494963%"),
    minHeight: hp("60.07311044494963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.24973360697428%"),
    top: hp("53.17632956582992%")
  },
  ImageBackground_119_5: {
    width: wp("19.119113286336262%"),
    minWidth: wp("19.119113286336262%"),
    height: hp("50.60225523234717%"),
    minHeight: hp("50.60225523234717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.686347961425781%"),
    top: hp("9.555470617742486%")
  },
  ImageBackground_119_6: {
    width: wp("42.91863441467285%"),
    minWidth: wp("42.91863441467285%"),
    height: hp("112.9032405999189%"),
    minHeight: hp("112.9032405999189%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3138682047526045%"),
    top: hp("4.956504946849378%")
  },
  View_119_10: {
    width: wp("5.3125%"),
    minWidth: wp("5.3125%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666643%"),
    top: hp("43.44262295081967%")
  },
  ImageBackground_117_10: {
    width: wp("0.8333333333333334%"),
    height: hp("2.185792349726776%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.479166666666668%")
  },
  View_117_9: {
    width: wp("3.958333333333333%"),
    minWidth: wp("3.958333333333333%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_117_9: {
    color: "rgba(55, 54, 117, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_9: {
    width: wp("4.427083333333334%"),
    minWidth: wp("4.427083333333334%"),
    height: hp("10.46510706833803%"),
    minHeight: hp("10.46510706833803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2499999999999964%"),
    top: hp("6.010928961748647%")
  },
  ImageBackground_117_2: {
    width: wp("3.6458333333333335%"),
    minWidth: wp("3.6458333333333335%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.41666666666666785%"),
    top: hp("0%")
  },
  ImageBackground_118_21: {
    width: wp("4.427083333333334%"),
    minWidth: wp("4.427083333333334%"),
    height: hp("9.782046959048412%"),
    minHeight: hp("9.782046959048412%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896131%"),
    resizeMode: "cover"
  },
  View_119_8: {
    width: wp("16.822916666666668%"),
    minWidth: wp("16.822916666666668%"),
    height: hp("18.0327868852459%"),
    minHeight: hp("18.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666643%"),
    top: hp("19.26229508196721%")
  },
  View_117_3: {
    width: wp("12.812499999999998%"),
    minWidth: wp("12.812499999999998%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_117_3: {
    color: "rgba(55, 54, 117, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_117_8: {
    width: wp("16.822916666666668%"),
    minWidth: wp("16.822916666666668%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.284153005464503%")
  },
  Text_117_8: {
    color: "rgba(115, 115, 137, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_120_2: {
    width: wp("20.3125%"),
    minWidth: wp("20.3125%"),
    height: hp("51.91256830601093%"),
    minHeight: hp("51.91256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.71691004435222%"),
    top: hp("128.19955961300377%")
  },
  View_120_3: {
    width: wp("20.3125%"),
    minWidth: wp("20.3125%"),
    height: hp("51.91256830601093%"),
    minHeight: hp("51.91256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 247, 255, 1)",
    opacity: 0.800000011920929,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 3,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_120_4: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("51.09289617486339%"),
    minHeight: hp("51.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15624999999999645%"),
    top: hp("0.4098360655737565%")
  },
  View_120_5: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("51.09289617486339%"),
    minHeight: hp("51.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 247, 255, 1)",
    opacity: 0.800000011920929,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_120_6: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("51.09289617486339%"),
    minHeight: hp("51.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_120_7: {
    width: wp("22.69749641418457%"),
    minWidth: wp("22.69749641418457%"),
    height: hp("60.07311044494963%"),
    minHeight: hp("60.07311044494963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.24973360697428%"),
    top: hp("53.17632956582992%")
  },
  ImageBackground_120_8: {
    width: wp("19.119113286336262%"),
    minWidth: wp("19.119113286336262%"),
    height: hp("50.60225523234717%"),
    minHeight: hp("50.60225523234717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.686347961425781%"),
    top: hp("9.555470617742486%")
  },
  ImageBackground_120_9: {
    width: wp("42.91863441467285%"),
    minWidth: wp("42.91863441467285%"),
    height: hp("112.9032405999189%"),
    minHeight: hp("112.9032405999189%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3138682047526045%"),
    top: hp("4.956504946849378%")
  },
  View_120_10: {
    width: wp("5.3125%"),
    minWidth: wp("5.3125%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666643%"),
    top: hp("43.44262295081967%")
  },
  ImageBackground_120_11: {
    width: wp("0.8333333333333334%"),
    height: hp("2.185792349726776%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.479166666666668%")
  },
  View_120_13: {
    width: wp("3.958333333333333%"),
    minWidth: wp("3.958333333333333%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_120_13: {
    color: "rgba(55, 54, 117, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_120_14: {
    width: wp("3.6458333333333335%"),
    minWidth: wp("3.6458333333333335%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666643%"),
    top: hp("6.010928961748618%")
  },
  ImageBackground_120_15: {
    width: wp("3.6458333333333335%"),
    minWidth: wp("3.6458333333333335%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_123_75: {
    width: wp("2.3958333333333335%"),
    height: hp("4.6549270713264175%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.625%")
  },
  View_120_17: {
    width: wp("16.822916666666668%"),
    minWidth: wp("16.822916666666668%"),
    height: hp("18.0327868852459%"),
    minHeight: hp("18.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666643%"),
    top: hp("19.26229508196718%")
  },
  View_120_18: {
    width: wp("6.614583333333333%"),
    minWidth: wp("6.614583333333333%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_120_18: {
    color: "rgba(55, 54, 117, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_120_19: {
    width: wp("16.822916666666668%"),
    minWidth: wp("16.822916666666668%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.284153005464475%")
  },
  Text_120_19: {
    color: "rgba(115, 115, 137, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_12: {
    width: wp("20.3125%"),
    minWidth: wp("20.3125%"),
    height: hp("51.91256830601093%"),
    minHeight: hp("51.91256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.414826711018875%"),
    top: hp("69.45639021409664%")
  },
  View_119_13: {
    width: wp("20.3125%"),
    minWidth: wp("20.3125%"),
    height: hp("51.91256830601093%"),
    minHeight: hp("51.91256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 247, 255, 1)",
    opacity: 0.800000011920929,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 3,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_119_14: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("51.09289617486339%"),
    minHeight: hp("51.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15625%"),
    top: hp("0.4098360655737565%")
  },
  View_119_15: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("51.09289617486339%"),
    minHeight: hp("51.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 247, 255, 1)",
    opacity: 0.800000011920929,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_119_16: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("51.09289617486339%"),
    minHeight: hp("51.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_119_17: {
    width: wp("22.69749641418457%"),
    minWidth: wp("22.69749641418457%"),
    height: hp("60.07311044494963%"),
    minHeight: hp("60.07311044494963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.249734004338578%"),
    top: hp("53.17632956582992%")
  },
  ImageBackground_119_18: {
    width: wp("19.119113286336262%"),
    minWidth: wp("19.119113286336262%"),
    height: hp("50.60225523234717%"),
    minHeight: hp("50.60225523234717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.6863463719685825%"),
    top: hp("9.555470617742486%")
  },
  ImageBackground_119_19: {
    width: wp("42.91863441467285%"),
    minWidth: wp("42.91863441467285%"),
    height: hp("112.9032405999189%"),
    minHeight: hp("112.9032405999189%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.313869794209797%"),
    top: hp("4.956504946849378%")
  },
  View_119_20: {
    width: wp("5.3125%"),
    minWidth: wp("5.3125%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666643%"),
    top: hp("43.44262295081967%")
  },
  ImageBackground_119_21: {
    width: wp("0.8333333333333334%"),
    height: hp("2.185792349726776%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.479166666666671%")
  },
  View_119_23: {
    width: wp("3.958333333333333%"),
    minWidth: wp("3.958333333333333%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_119_23: {
    color: "rgba(31, 28, 246, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_24: {
    width: wp("4.6875%"),
    minWidth: wp("4.6875%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666643%"),
    top: hp("4.371584699453564%")
  },
  ImageBackground_119_25: {
    width: wp("4.6875%"),
    minWidth: wp("4.6875%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_123_52: {
    width: wp("3.6458333333333335%"),
    minWidth: wp("3.6458333333333335%"),
    height: hp("5.122951861939144%"),
    minHeight: hp("5.122951861939144%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5208333333333357%"),
    top: hp("3.551912568305994%"),
    resizeMode: "cover"
  },
  View_119_27: {
    width: wp("16.822916666666668%"),
    minWidth: wp("16.822916666666668%"),
    height: hp("18.0327868852459%"),
    minHeight: hp("18.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666643%"),
    top: hp("19.26229508196721%")
  },
  View_119_28: {
    width: wp("3.75%"),
    minWidth: wp("3.75%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_119_28: {
    color: "rgba(55, 54, 117, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_29: {
    width: wp("16.822916666666668%"),
    minWidth: wp("16.822916666666668%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.284153005464503%")
  },
  Text_119_29: {
    color: "rgba(115, 115, 137, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_120_20: {
    width: wp("20.3125%"),
    minWidth: wp("20.3125%"),
    height: hp("51.91256830601093%"),
    minHeight: hp("51.91256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.414826711018875%"),
    top: hp("128.19955961300377%")
  },
  View_120_21: {
    width: wp("20.3125%"),
    minWidth: wp("20.3125%"),
    height: hp("51.91256830601093%"),
    minHeight: hp("51.91256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 247, 255, 1)",
    opacity: 0.800000011920929,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 3,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_120_22: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("51.09289617486339%"),
    minHeight: hp("51.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15625%"),
    top: hp("0.4098360655737565%")
  },
  View_120_23: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("51.09289617486339%"),
    minHeight: hp("51.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 247, 255, 1)",
    opacity: 0.800000011920929,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_120_24: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("51.09289617486339%"),
    minHeight: hp("51.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_120_25: {
    width: wp("22.69749641418457%"),
    minWidth: wp("22.69749641418457%"),
    height: hp("60.07311044494963%"),
    minHeight: hp("60.07311044494963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.249734004338578%"),
    top: hp("53.17632956582992%")
  },
  ImageBackground_120_26: {
    width: wp("19.119113286336262%"),
    minWidth: wp("19.119113286336262%"),
    height: hp("50.60225523234717%"),
    minHeight: hp("50.60225523234717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.6863463719685825%"),
    top: hp("9.555470617742486%")
  },
  ImageBackground_120_27: {
    width: wp("42.91863441467285%"),
    minWidth: wp("42.91863441467285%"),
    height: hp("112.9032405999189%"),
    minHeight: hp("112.9032405999189%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.313869794209797%"),
    top: hp("4.956504946849378%")
  },
  View_120_28: {
    width: wp("5.3125%"),
    minWidth: wp("5.3125%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666643%"),
    top: hp("43.44262295081967%")
  },
  ImageBackground_120_29: {
    width: wp("0.8333333333333334%"),
    height: hp("2.185792349726776%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.479166666666671%")
  },
  View_120_31: {
    width: wp("3.958333333333333%"),
    minWidth: wp("3.958333333333333%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_120_31: {
    color: "rgba(31, 28, 246, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_120_32: {
    width: wp("3.6458333333333335%"),
    minWidth: wp("3.6458333333333335%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666643%"),
    top: hp("6.010928961748618%")
  },
  ImageBackground_120_33: {
    width: wp("3.6458333333333335%"),
    minWidth: wp("3.6458333333333335%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_123_79: {
    width: wp("2.8125%"),
    minWidth: wp("2.8125%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4166666666666643%"),
    top: hp("1.0928961748633697%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_123_80: {
    width: wp("2.3456249634424844%"),
    height: hp("5.740130273370795%"),
    top: hp("0.8040964929132599%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2325000862280575%")
  },
  ImageBackground_123_81: {
    width: wp("0.32430460055669147%"),
    height: hp("1.8171847192316108%"),
    top: hp("3.922942948471672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0190623501936642%")
  },
  ImageBackground_123_82: {
    width: wp("2.3456249634424844%"),
    height: hp("4.46311554622129%"),
    top: hp("0.5803342725409948%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_123_85: {
    width: wp("0.7350006699562073%"),
    height: hp("3.3614752722568197%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2299994130929335%")
  },
  View_120_35: {
    width: wp("16.822916666666668%"),
    minWidth: wp("16.822916666666668%"),
    height: hp("18.0327868852459%"),
    minHeight: hp("18.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666643%"),
    top: hp("19.26229508196718%")
  },
  View_120_36: {
    width: wp("13.177083333333334%"),
    minWidth: wp("13.177083333333334%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_120_36: {
    color: "rgba(55, 54, 117, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_120_37: {
    width: wp("16.822916666666668%"),
    minWidth: wp("16.822916666666668%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.284153005464475%")
  },
  Text_120_37: {
    color: "rgba(115, 115, 137, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_30: {
    width: wp("20.3125%"),
    minWidth: wp("20.3125%"),
    height: hp("51.91256830601093%"),
    minHeight: hp("51.91256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.11274337768555%"),
    top: hp("69.45639021409664%")
  },
  View_119_31: {
    width: wp("20.3125%"),
    minWidth: wp("20.3125%"),
    height: hp("51.91256830601093%"),
    minHeight: hp("51.91256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 247, 255, 1)",
    opacity: 0.800000011920929,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 3,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_119_32: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("51.09289617486339%"),
    minHeight: hp("51.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15625%"),
    top: hp("0.4098360655737565%")
  },
  View_119_33: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("51.09289617486339%"),
    minHeight: hp("51.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 247, 255, 1)",
    opacity: 0.800000011920929,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_119_34: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("51.09289617486339%"),
    minHeight: hp("51.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_119_35: {
    width: wp("22.69749641418457%"),
    minWidth: wp("22.69749641418457%"),
    height: hp("60.07311044494963%"),
    minHeight: hp("60.07311044494963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.24973360697429%"),
    top: hp("53.17632956582992%")
  },
  ImageBackground_119_36: {
    width: wp("19.119113286336262%"),
    minWidth: wp("19.119113286336262%"),
    height: hp("50.60225523234717%"),
    minHeight: hp("50.60225523234717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.68634637196859%"),
    top: hp("9.555470617742486%")
  },
  ImageBackground_119_37: {
    width: wp("42.91863441467285%"),
    minWidth: wp("42.91863441467285%"),
    height: hp("112.9032405999189%"),
    minHeight: hp("112.9032405999189%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3138697942098005%"),
    top: hp("4.956504946849378%")
  },
  View_119_38: {
    width: wp("5.3125%"),
    minWidth: wp("5.3125%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666643%"),
    top: hp("43.44262295081967%")
  },
  ImageBackground_119_39: {
    width: wp("0.8333333333333334%"),
    height: hp("2.185792349726776%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.479166666666671%")
  },
  View_119_41: {
    width: wp("3.958333333333333%"),
    minWidth: wp("3.958333333333333%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_119_41: {
    color: "rgba(55, 54, 117, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_42: {
    width: wp("3.6458333333333335%"),
    minWidth: wp("3.6458333333333335%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666643%"),
    top: hp("6.010928961748647%")
  },
  ImageBackground_119_43: {
    width: wp("3.6458333333333335%"),
    minWidth: wp("3.6458333333333335%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_123_53: {
    width: wp("2.2916666666666665%"),
    height: hp("6.0109289617486334%"),
    top: hp("1.7759562841530112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6770833333333286%")
  },
  View_119_45: {
    width: wp("16.822916666666668%"),
    minWidth: wp("16.822916666666668%"),
    height: hp("18.0327868852459%"),
    minHeight: hp("18.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666643%"),
    top: hp("19.26229508196721%")
  },
  View_119_46: {
    width: wp("4.6875%"),
    minWidth: wp("4.6875%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_119_46: {
    color: "rgba(55, 54, 117, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_47: {
    width: wp("16.822916666666668%"),
    minWidth: wp("16.822916666666668%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.284153005464503%")
  },
  Text_119_47: {
    color: "rgba(115, 115, 137, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_120_38: {
    width: wp("20.3125%"),
    minWidth: wp("20.3125%"),
    height: hp("51.91256830601093%"),
    minHeight: hp("51.91256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.11274337768555%"),
    top: hp("128.19955961300377%")
  },
  View_120_39: {
    width: wp("20.3125%"),
    minWidth: wp("20.3125%"),
    height: hp("51.91256830601093%"),
    minHeight: hp("51.91256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 247, 255, 1)",
    opacity: 0.800000011920929,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 3,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_120_40: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("51.09289617486339%"),
    minHeight: hp("51.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15625%"),
    top: hp("0.4098360655737565%")
  },
  View_120_41: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("51.09289617486339%"),
    minHeight: hp("51.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 247, 255, 1)",
    opacity: 0.800000011920929,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_120_42: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("51.09289617486339%"),
    minHeight: hp("51.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_120_43: {
    width: wp("22.69749641418457%"),
    minWidth: wp("22.69749641418457%"),
    height: hp("60.07311044494963%"),
    minHeight: hp("60.07311044494963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.24973360697429%"),
    top: hp("53.17632956582992%")
  },
  ImageBackground_120_44: {
    width: wp("19.119113286336262%"),
    minWidth: wp("19.119113286336262%"),
    height: hp("50.60225523234717%"),
    minHeight: hp("50.60225523234717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.68634637196859%"),
    top: hp("9.555470617742486%")
  },
  ImageBackground_120_45: {
    width: wp("42.91863441467285%"),
    minWidth: wp("42.91863441467285%"),
    height: hp("112.9032405999189%"),
    minHeight: hp("112.9032405999189%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3138697942098005%"),
    top: hp("4.956504946849378%")
  },
  View_120_46: {
    width: wp("5.3125%"),
    minWidth: wp("5.3125%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666643%"),
    top: hp("43.44262295081967%")
  },
  ImageBackground_120_47: {
    width: wp("0.8333333333333334%"),
    height: hp("2.185792349726776%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.479166666666671%")
  },
  View_120_49: {
    width: wp("3.958333333333333%"),
    minWidth: wp("3.958333333333333%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_120_49: {
    color: "rgba(55, 54, 117, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_120_50: {
    width: wp("3.6458333333333335%"),
    minWidth: wp("3.6458333333333335%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666643%"),
    top: hp("6.010928961748618%")
  },
  ImageBackground_120_51: {
    width: wp("3.6458333333333335%"),
    minWidth: wp("3.6458333333333335%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_123_91: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("7.423445696387786%"),
    minHeight: hp("7.423445696387786%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1041666666666714%"),
    top: hp("1.0928961748633697%"),
    resizeMode: "cover"
  },
  View_120_53: {
    width: wp("16.822916666666668%"),
    minWidth: wp("16.822916666666668%"),
    height: hp("18.0327868852459%"),
    minHeight: hp("18.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666643%"),
    top: hp("19.26229508196718%")
  },
  View_120_54: {
    width: wp("10.833333333333334%"),
    minWidth: wp("10.833333333333334%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_120_54: {
    color: "rgba(55, 54, 117, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_120_55: {
    width: wp("16.822916666666668%"),
    minWidth: wp("16.822916666666668%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.284153005464475%")
  },
  Text_120_55: {
    color: "rgba(115, 115, 137, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_162_96: {
    width: wp("11.458333333333332%"),
    minWidth: wp("11.458333333333332%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.96691004435222%"),
    top: hp("49.37442300098189%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_162_97: {
    width: wp("12.5%"),
    minWidth: wp("12.5%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.0416666666666856%"),
    top: hp("0%"),
    backgroundColor: "rgba(32, 28, 254, 1)"
  },
  View_162_98: {
    width: wp("7.5%"),
    minWidth: wp("7.5%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4583333333333286%"),
    top: hp("2.0491803278688394%")
  },
  Text_162_98: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_124_0: {
    width: wp("157.35387166341147%"),
    minWidth: wp("157.35387166341147%"),
    height: hp("297.97276564634564%"),
    minHeight: hp("297.97276564634564%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-31.874999999999996%"),
    top: hp("-118.85245901639345%")
  },
  View_98_18: {
    width: wp("81.74680709838867%"),
    minWidth: wp("81.74680709838867%"),
    height: hp("250.15175407701503%"),
    minHeight: hp("250.15175407701503%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.607058207194%"),
    top: hp("0%")
  },
  ImageBackground_97_5: {
    width: wp("36.041666666666664%"),
    minWidth: wp("36.041666666666664%"),
    height: hp("77.3224043715847%"),
    minHeight: hp("77.3224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.958333333333336%"),
    top: hp("99.8785300332992%")
  },
  ImageBackground_97_4: {
    width: wp("26.197916666666664%"),
    minWidth: wp("26.197916666666664%"),
    height: hp("43.71584699453552%"),
    minHeight: hp("43.71584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7708333333333357%"),
    top: hp("114.90585243767077%")
  },
  ImageBackground_94_11: {
    width: wp("57.70833333333333%"),
    minWidth: wp("57.70833333333333%"),
    height: hp("132.78688524590163%"),
    minHeight: hp("132.78688524590163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("117.3648688311134%")
  },
  View_98_19: {
    width: wp("61.09629948933919%"),
    minWidth: wp("61.09629948933919%"),
    height: hp("162.85317009264003%"),
    minHeight: hp("162.85317009264003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("135.1195872155695%")
  },
  ImageBackground_98_22: {
    width: wp("24.848572413126625%"),
    minWidth: wp("24.848572413126625%"),
    height: hp("65.55663562211834%"),
    minHeight: hp("65.55663562211834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.97164154052734%"),
    top: hp("18.17424440644478%")
  },
  ImageBackground_98_21: {
    width: wp("25.924895604451496%"),
    minWidth: wp("25.924895604451496%"),
    height: hp("39.78228126067281%"),
    minHeight: hp("39.78228126067281%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.767386118570958%"),
    top: hp("59.09340029857198%")
  },
  ImageBackground_98_23: {
    width: wp("57.59859720865885%"),
    minWidth: wp("57.59859720865885%"),
    height: hp("156.45034873420423%"),
    minHeight: hp("156.45034873420423%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7488479614257812%"),
    top: hp("3.2014065101498446%")
  },
  ImageBackground_213_0: {
    width: wp("35.013275146484375%"),
    minWidth: wp("35.013275146484375%"),
    height: hp("17.898761770112916%"),
    minHeight: hp("17.898761770112916%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.12877909342447%"),
    top: hp("222.6472698274206%")
  },
  View_97_28: {
    width: wp("8.489583333333334%"),
    minWidth: wp("8.489583333333334%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("104.46122487386067%"),
    top: hp("130.34301090761613%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_97_27: {
    width: wp("8.489583333333334%"),
    minWidth: wp("8.489583333333334%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_96_9: {
    width: wp("8.489583333333334%"),
    minWidth: wp("8.489583333333334%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 247, 255, 1)",
    opacity: 0.699999988079071,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 0
  },
  ImageBackground_97_8: {
    width: wp("3.4375000000000004%"),
    minWidth: wp("3.4375000000000004%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666714%"),
    top: hp("1.775956284153004%"),
    resizeMode: "cover"
  },
  View_97_12: {
    width: wp("1.3020833333333335%"),
    minWidth: wp("1.3020833333333335%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.104166666666671%"),
    top: hp("1.775956284153004%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_97_10: {
    width: wp("0.8333333333333334%"),
    height: hp("2.185792349726776%"),
    top: hp("3.005464480874318%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.364583333333343%")
  },
  View_97_26: {
    width: wp("26.5625%"),
    minWidth: wp("26.5625%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.37789154052734%"),
    top: hp("130.34301090761613%")
  },
  View_94_8: {
    width: wp("26.5625%"),
    minWidth: wp("26.5625%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 247, 255, 1)",
    opacity: 0.699999988079071,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 30
  },
  View_97_23: {
    width: wp("1.875%"),
    minWidth: wp("1.875%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.760416666666671%"),
    top: hp("1.6393442622950811%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_96_4: {
    width: wp("1.875%"),
    minWidth: wp("1.875%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_96_4: {
    color: "rgba(128, 127, 169, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_97_24: {
    width: wp("3.0729166666666665%"),
    minWidth: wp("3.0729166666666665%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.822916666666664%"),
    top: hp("1.6393442622950811%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_96_5: {
    width: wp("3.0729166666666665%"),
    minWidth: wp("3.0729166666666665%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_96_5: {
    color: "rgba(128, 127, 169, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_97_25: {
    width: wp("1.7187500000000002%"),
    minWidth: wp("1.7187500000000002%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.08333333333333%"),
    top: hp("1.6393442622950811%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_96_6: {
    width: wp("1.7187500000000002%"),
    minWidth: wp("1.7187500000000002%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_96_6: {
    color: "rgba(128, 127, 169, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_97_22: {
    width: wp("3.4895833333333335%"),
    minWidth: wp("3.4895833333333335%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2916666666666643%"),
    top: hp("1.6393442622950811%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_94_12: {
    width: wp("2.7604166666666665%"),
    minWidth: wp("2.7604166666666665%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_94_12: {
    color: "rgba(32, 27, 254, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_97_15: {
    width: wp("0.7291666666666666%"),
    height: hp("1.912568306010929%"),
    top: hp("1.8101092896174862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7604166666666714%")
  },
  View_96_3: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.284153005464482%"),
    backgroundColor: "rgba(32, 27, 254, 1)"
  },
  View_97_20: {
    width: wp("3.90625%"),
    minWidth: wp("3.90625%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.98958333333333%"),
    top: hp("1.6393442622950811%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_96_8: {
    width: wp("3.125%"),
    minWidth: wp("3.125%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_96_8: {
    color: "rgba(128, 127, 169, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_97_18: {
    width: wp("0.7291666666666666%"),
    height: hp("1.912568306010929%"),
    top: hp("1.8101092896174862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.177083333333343%")
  },
  View_112_0: {
    width: wp("11.458333333333332%"),
    minWidth: wp("11.458333333333332%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.74247487386067%"),
    top: hp("212.85667210980193%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_105_4: {
    width: wp("11.458333333333332%"),
    minWidth: wp("11.458333333333332%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(32, 28, 254, 0.8999999761581421)"
  },
  View_100_3: {
    width: wp("5.989583333333334%"),
    minWidth: wp("5.989583333333334%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7083333333333357%"),
    top: hp("2.322404371584696%")
  },
  Text_100_3: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_98_0: {
    width: wp("10.761797428131104%"),
    minWidth: wp("10.761797428131104%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.32580820719401%"),
    top: hp("131.02607101690575%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_98_1: {
    width: wp("9.776607354482016%"),
    height: hp("5.250509710259776%"),
    top: hp("0.7571256877294665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.44867038726806463%")
  },
  View_98_17: {
    width: wp("32.03125%"),
    minWidth: wp("32.03125%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.58622487386067%"),
    top: hp("173.64902183657787%")
  },
  View_92_2: {
    width: wp("32.03125%"),
    minWidth: wp("32.03125%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23.49726775956284%")
  },
  Text_92_2: {
    color: "rgba(32, 28, 254, 1)",
    fontSize: 56,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_98_15: {
    width: wp("27.03125%"),
    minWidth: wp("27.03125%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.748633879781416%")
  },
  Text_98_15: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 56,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_98_16: {
    width: wp("14.895833333333334%"),
    minWidth: wp("14.895833333333334%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_98_16: {
    color: "rgba(20, 19, 97, 1)",
    fontSize: 56,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_111_0: {
    width: wp("45.208333333333336%"),
    height: hp("86.6120218579235%"),
    top: hp("138.52459016393445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.47916666666666%")
  },
  ImageBackground_111_3: {
    width: wp("6.197916666666667%"),
    minWidth: wp("6.197916666666667%"),
    height: hp("16.120218579234972%"),
    minHeight: hp("16.120218579234972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("65.43715846994536%")
  },
  ImageBackground_111_4: {
    width: wp("12.083333333333334%"),
    minWidth: wp("12.083333333333334%"),
    height: hp("31.830601092896178%"),
    minHeight: hp("31.830601092896178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.12500000000001%"),
    top: hp("0%")
  },
  View_111_5: {
    width: wp("37.708333333333336%"),
    height: hp("69.26229508196722%"),
    top: hp("17.349726775956288%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333286%")
  },
  ImageBackground_111_6: {
    width: wp("37.708333333333336%"),
    minWidth: wp("37.708333333333336%"),
    height: hp("69.26229508196722%"),
    minHeight: hp("69.26229508196722%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_123_99: {
    width: wp("5.913026730219523%"),
    minWidth: wp("5.913026730219523%"),
    height: hp("15.50957830877252%"),
    minHeight: hp("15.50957830877252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.04867808024089%"),
    top: hp("13.653797920935794%")
  },
  ImageBackground_123_3: {
    width: wp("5.913026730219523%"),
    minWidth: wp("5.913026730219523%"),
    height: hp("15.50957830877252%"),
    minHeight: hp("15.50957830877252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_123_9: {
    width: wp("5.068308512369792%"),
    minWidth: wp("5.068308512369792%"),
    height: hp("6.6469619834357925%"),
    minHeight: hp("6.6469619834357925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.42235851287841797%"),
    top: hp("3.988177398514871%"),
    resizeMode: "cover"
  },
  View_123_103: {
    width: wp("5.913026730219523%"),
    minWidth: wp("5.913026730219523%"),
    height: hp("15.50957830877252%"),
    minHeight: hp("15.50957830877252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.04867808024089%"),
    top: hp("33.8162448236851%")
  },
  ImageBackground_123_7: {
    width: wp("5.913026730219523%"),
    minWidth: wp("5.913026730219523%"),
    height: hp("15.50957830877252%"),
    minHeight: hp("15.50957830877252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_123_16: {
    width: wp("3.885703086853028%"),
    height: hp("10.06255019557932%"),
    top: hp("2.6587835426539073%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0136636098225864%")
  },
  View_123_104: {
    width: wp("5.913026730219523%"),
    minWidth: wp("5.913026730219523%"),
    height: hp("15.50957830877252%"),
    minHeight: hp("15.50957830877252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.833747863769538%"),
    top: hp("33.743169398907106%")
  },
  ImageBackground_123_8: {
    width: wp("5.913026730219523%"),
    minWidth: wp("5.913026730219523%"),
    height: hp("15.50957830877252%"),
    minHeight: hp("15.50957830877252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_123_38: {
    width: wp("5.490667422612508%"),
    minWidth: wp("5.490667422612508%"),
    height: hp("12.227900562390603%"),
    minHeight: hp("12.227900562390603%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08447329203288234%"),
    top: hp("1.7725230566139345%"),
    resizeMode: "cover"
  },
  View_123_100: {
    width: wp("5.913026730219523%"),
    minWidth: wp("5.913026730219523%"),
    height: hp("15.50957830877252%"),
    minHeight: hp("15.50957830877252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.833747863769538%"),
    top: hp("13.653797920935794%")
  },
  ImageBackground_123_5: {
    width: wp("5.913026730219523%"),
    minWidth: wp("5.913026730219523%"),
    height: hp("15.50957830877252%"),
    minHeight: hp("15.50957830877252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_123_11: {
    width: wp("4.2235902945200605%"),
    minWidth: wp("4.2235902945200605%"),
    height: hp("11.013294699413528%"),
    minHeight: hp("11.013294699413528%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8447170257568359%"),
    top: hp("3.3234820339849023%"),
    resizeMode: "cover"
  },
  View_123_101: {
    width: wp("5.913026730219523%"),
    minWidth: wp("5.913026730219523%"),
    height: hp("15.50957830877252%"),
    minHeight: hp("15.50957830877252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.51041666666668%"),
    top: hp("13.653797920935794%")
  },
  ImageBackground_123_4: {
    width: wp("5.913026730219523%"),
    minWidth: wp("5.913026730219523%"),
    height: hp("15.50957830877252%"),
    minHeight: hp("15.50957830877252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_123_10: {
    width: wp("4.2235902945200605%"),
    minWidth: wp("4.2235902945200605%"),
    height: hp("10.961654538013896%"),
    minHeight: hp("10.961654538013896%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8447170257568359%"),
    top: hp("2.2156543419009296%"),
    resizeMode: "cover"
  },
  View_123_102: {
    width: wp("5.913026730219523%"),
    minWidth: wp("5.913026730219523%"),
    height: hp("15.50957830877252%"),
    minHeight: hp("15.50957830877252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.51041666666668%"),
    top: hp("33.743169398907106%")
  },
  ImageBackground_123_6: {
    width: wp("5.913026730219523%"),
    minWidth: wp("5.913026730219523%"),
    height: hp("15.50957830877252%"),
    minHeight: hp("15.50957830877252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_123_12: {
    width: wp("4.0546464920043945%"),
    height: hp("7.8778793251579575%"),
    top: hp("4.209741477757845%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0136604309082031%")
  },
  ImageBackground_111_12: {
    width: wp("0.7829676568508147%"),
    minWidth: wp("0.7829676568508147%"),
    height: hp("2.053699206784775%"),
    minHeight: hp("2.053699206784775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.902971903483085%"),
    top: hp("3.010609110847845%")
  },
  ImageBackground_111_13: {
    width: wp("0.7829780379931132%"),
    minWidth: wp("0.7829780379931132%"),
    height: hp("2.053699206784775%"),
    minHeight: hp("2.053699206784775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.698702494303383%"),
    top: hp("3.010609110847845%")
  },
  ImageBackground_111_14: {
    width: wp("0.7829780379931132%"),
    minWidth: wp("0.7829780379931132%"),
    height: hp("2.053699206784775%"),
    minHeight: hp("2.053699206784775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.49443308512371%"),
    top: hp("3.010609110847845%")
  },
  ImageBackground_204_2: {
    width: wp("10.830463568369547%"),
    minWidth: wp("10.830463568369547%"),
    height: hp("19.153071752662868%"),
    minHeight: hp("19.153071752662868%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("111.79439862569173%"),
    top: hp("214.62315627134564%"),
    resizeMode: "cover"
  },
  ImageBackground_195_1: {
    width: wp("30.833333333333336%"),
    minWidth: wp("30.833333333333336%"),
    height: hp("81.69398907103826%"),
    minHeight: hp("81.69398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("107.08333333333333%"),
    top: hp("165.1639344262295%"),
    resizeMode: "cover"
  },
  View_202_0: {
    width: wp("10.15625%"),
    minWidth: wp("10.15625%"),
    height: hp("18.205657291933484%"),
    minHeight: hp("18.205657291933484%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.15624999999999%"),
    top: hp("212.7049180327869%")
  },
  View_202_9: {
    width: wp("8.904768625895182%"),
    minWidth: wp("8.904768625895182%"),
    height: hp("11.362753279222165%"),
    minHeight: hp("11.362753279222165%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6257406870524136%"),
    top: hp("6.842904012711315%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.800000011920929,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_202_2: {
    width: wp("10.15625%"),
    minWidth: wp("10.15625%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  ImageBackground_202_3: {
    width: wp("9.535772005716959%"),
    minWidth: wp("9.535772005716959%"),
    height: hp("6.938221415535348%"),
    minHeight: hp("6.938221415535348%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.32656828562419804%"),
    top: hp("7.910744088595038%")
  },
  ImageBackground_202_4: {
    width: wp("0.5208333333333333%"),
    minWidth: wp("0.5208333333333333%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.437500000000007%"),
    top: hp("7.240437158469945%")
  },
  ImageBackground_202_5: {
    width: wp("0.20833333333333334%"),
    minWidth: wp("0.20833333333333334%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.593750000000007%"),
    top: hp("7.6502732240437155%")
  },
  View_202_6: {
    width: wp("2.890472610791524%"),
    minWidth: wp("2.890472610791524%"),
    height: hp("0.8308567636000002%"),
    minHeight: hp("0.8308567636000002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3559347788492886%"),
    top: hp("6.713958906997092%"),
    backgroundColor: "rgba(177, 158, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_202_7: {
    width: wp("1.643213927745819%"),
    minWidth: wp("1.643213927745819%"),
    height: hp("0.8308567636000002%"),
    minHeight: hp("0.8308567636000002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3559347788492886%"),
    top: hp("8.32374864588671%"),
    backgroundColor: "rgba(212, 202, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_202_8: {
    width: wp("1.2357414762179058%"),
    minWidth: wp("1.2357414762179058%"),
    height: hp("3.241289117948605%"),
    minHeight: hp("3.241289117948605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6564871470133511%"),
    top: hp("6.291423860143439%")
  },
  ImageBackground_204_8: {
    width: wp("2.5%"),
    minWidth: wp("2.5%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.260416666666671%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_204_7: {
    width: wp("7.187499999999999%"),
    minWidth: wp("7.187499999999999%"),
    height: hp("17.48633879781421%"),
    minHeight: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.47916666666666%"),
    top: hp("175%"),
    resizeMode: "cover"
  },
  ImageBackground_201_31: {
    width: wp("13.425877888997395%"),
    minWidth: wp("13.425877888997395%"),
    height: hp("29.460494244684938%"),
    minHeight: hp("29.460494244684938%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.083717346191403%"),
    top: hp("163.25386964558254%")
  },
  ImageBackground_201_32: {
    width: wp("11.81230624516805%"),
    minWidth: wp("11.81230624516805%"),
    height: hp("35.281009361392165%"),
    minHeight: hp("35.281009361392165%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("121.73987706502278%"),
    top: hp("126.20104180007685%")
  },
  ImageBackground_204_3: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.36458333333333%"),
    top: hp("168.30601092896177%")
  },
  ImageBackground_204_6: {
    width: wp("0.5208333333333333%"),
    minWidth: wp("0.5208333333333333%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("111.97916666666667%"),
    top: hp("228.27868852459017%")
  },
  ImageBackground_204_4: {
    width: wp("0.3645833333333333%"),
    minWidth: wp("0.3645833333333333%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.94791666666666%"),
    top: hp("164.20765027322406%")
  },
  ImageBackground_204_11: {
    width: wp("8.77397616704305%"),
    minWidth: wp("8.77397616704305%"),
    height: hp("26.210232510592768%"),
    minHeight: hp("26.210232510592768%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("98.95832856496175%"),
    top: hp("144.672131147541%"),
    resizeMode: "cover"
  },
  View_2: { height: 6170 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
