import tw from 'twin.macro'
import { Button, Logo } from '@whoshiring/ui'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
}

const App = () => (
  <div css={styles.container({ hasBackground: false })}>
    <div tw="flex flex-col justify-center h-full gap-y-5">
      <Button variant="primary">Testing 123</Button>
      <Button variant="secondary">Cancel</Button>
      <Button isSmall>Close</Button>
    </div>
    <Logo />
  </div>
)

export default App
