import { createRoot } from "react-dom/client";
import { AppearanceProvider, Section, Page, Cell, Switch } from "@twa-dev/mark42";
import { InitialsAvatar } from '@twa-dev/mark42';
import { useColorScheme, useTheme, usePlatform } from "@twa-dev/mark42";


const MyButton = (props) => {
  const theme = useTheme();
  const colorScheme = useColorScheme();
  const platform = usePlatform();

  return <button {...props} />
}

const root = createRoot(document.getElementById("root") as HTMLElement)
root.render(<AppearanceProvider theme={"apple"} colorScheme={"light"}>

  <Page mode="primary">

    <Section
      title="Title"
      description={"Share your contacts with the community. It will help other members to reach you faster."}
      header={"Section"}
    >
      <MyButton>click me</MyButton>

      Content

      <Cell after={<Switch />} description="@Stambultsian">

        <InitialsAvatar
          entityId={1}
          entityName={'Roman Krutovoy'}
          theme="apple"
          className="My Avatar"
          style={{ marginRight: 10 }}
        />

        Twitter
      </Cell>
      <Cell after={<Switch />} description="@artursupertramp">
        Facebook
      </Cell>
      <Cell after={<Switch />} description="@ArthurStam">
        Telegram
      </Cell>
    </Section>
  </Page>

</AppearanceProvider>);
