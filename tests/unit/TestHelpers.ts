import { VueClass, Wrapper, mount, ThisTypedMountOptions } from '@vue/test-utils'
import { Vue } from 'vue-property-decorator'

export function createWrapper<V extends Vue, T> (
  component: VueClass<V>,
  options?: ThisTypedMountOptions<V>
): Wrapper<V & T> {
  return mount(component, options) as any
}

describe('dummy', () => {
  test('', () => {})
})
