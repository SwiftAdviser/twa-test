import {createRoot} from "react-dom/client";
import {AppearanceProvider, Section, Page, Cell, Switch} from "@twa-dev/mark42";
import {InitialsAvatar} from '@twa-dev/mark42';
import {useColorScheme, useTheme, usePlatform} from "@twa-dev/mark42";
import {TonConnectButton, TonConnectUIProvider, useTonAddress, TonConnect} from "@tonconnect/ui-react";


const MyButton = (props) => {
  const theme = useTheme();
  const colorScheme = useColorScheme();
  const platform = usePlatform();

  return <button {...props} />
}


const Address = () => {
  const userFriendlyAddress = useTonAddress();
  const rawAddress = useTonAddress(false);

  return (
      <div>
        <Cell description={userFriendlyAddress}>
          User-friendly address
        </Cell>
        <Cell description={rawAddress}>
          Raw address
        </Cell>
      </div>
  );
};

const root = createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <TonConnectUIProvider
    connector={new TonConnect({
      manifestUrl: "https://twa-test-beryl.vercel.app/tonconnect-manifest.json",
      walletsListSource: 'https://raw.githubusercontent.com/ton-blockchain/wallets-list/feature/at-wallet/wallets.json'
    })}>

    <AppearanceProvider theme={"apple"} colorScheme={"light"}>

      <Page mode="primary">

        <TonConnectButton />

        <Section
          title="Addresses"
          description={"Share your contacts with the community. It will help other members to reach you faster."}
          header={"Addresses"}
        >
          <MyButton>click me</MyButton>

          <Address />
        </Section>
      </Page>

    </AppearanceProvider>
  </TonConnectUIProvider>);
