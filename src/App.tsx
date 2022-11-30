import React from 'react';
import './App.css';
import {
    Actions,
    Block,
    BlockContent,
    Button,
    Flex,
    FlexItem,
    FooterNav,
    Header,
    Icon,
    Img,
    Link,
    ThemeProvider,
    themes
} from '@qiwi/pijma-desktop'

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={themes.orange}>
                <Flex direction={"column"} align="stretch" justify="space-between" minHeight={"100vh"}>
                    <Header>
                        <Flex width={1} height={1} justify="space-between">
                            <FlexItem ml={6}>
                                <Flex height={1}>
                                    <FlexItem align="center" shrink={0} mr={11}>
                                        <Link href={window.location.href}>
                                            <Img
                                                as="img"
                                                src="https://static.qiwi.com/img/qiwi_com/header/qiwi-wallet-logo.svg"
                                                width={24}
                                                height={12}
                                            />
                                        </Link>
                                    </FlexItem>
                                    <FlexItem
                                        align="center"
                                        shrink={0}
                                        width={6}
                                        height={6}
                                        cursor="pointer"
                                    >
                                        <Icon name="search"/>
                                    </FlexItem>
                                </Flex>
                            </FlexItem>
                            <FlexItem align="center" shrink={0} mr={6}>
                                <Actions size="minor">
                                    <Button kind="brand" size="minor" type="button" text="Войти"/>
                                </Actions>
                            </FlexItem>
                        </Flex>
                    </Header>
                    <Flex justify={"center"}>
                        <FlexItem>
                            <Button type={'button'} kind="simple" size="accent" text="Нажать" onClick={handleClick}/>
                        </FlexItem>
                    </Flex>
                    <Block>
                        <BlockContent>
                            <FooterNav
                                children={[
                                    {href: '#', target: '_self', children: 'Идентификация'},
                                    {href: '#', target: '_self', children: 'Помощь'},
                                    {href: '#', target: '_self', children: 'Оферты'},
                                ]}
                            />
                        </BlockContent>
                    </Block>
                </Flex>
            </ThemeProvider>
        </div>
    );
}

function handleClick() {
    console.log("Нажал")
}

export default App;
