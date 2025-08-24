<script>
  import { T, useTask } from '@threlte/core'
	import { useGltf } from '@threlte/extras';

	let float = 0
	let rotation = 1.2
  useTask((delta) => {
    float += delta
  })
</script>

<T.PerspectiveCamera
  makeDefault
  position={[10, 10, 9]}
  oncreate={(ref) => {
    ref.lookAt(0, 1, 0)
  }}
/>

<T.DirectionalLight position={[0, 10, 10]} />

<!-- <T.Mesh position.y={Math.sin(float) * 0.05}>
  <T.BoxGeometry />
  <T.MeshBasicMaterial />
</T.Mesh> -->
{#await useGltf('/mint.glb') then gltf}
  <T.Mesh is={gltf.scene} scale={[60, 60, 60]} rotation.y={rotation} position.y={Math.sin(float) * 0.2} />
{/await}