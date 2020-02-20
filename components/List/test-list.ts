import { Vue, Component, Prop } from "vue-property-decorator";
import { mapState } from "vuex";

@Component({
  template: `<h2>테스트</h2>`,
  computed: mapState('test', ['no', 'item'])
})

export default class List extends Vue{}