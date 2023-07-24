import { Flex, IconButton, Drawer, DrawerOverlay, DrawerContent, useDisclosure, Text, Stack, DrawerCloseButton, HStack, Button, ButtonGroup, Container, useBreakpointValue, Divider, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import { ColorModeSwitcher } from "../../theme/ColorModeSwitcher";

function Header() {

    const sidebar = useDisclosure();

    const isDesktop = useBreakpointValue({
        base: false,
        lg: true,
    });

    const itemsNavigation = [
        {
            name: 'Inicio',
            url: '/'
        },
        {
            name: 'Terminos',
            url: '/terminos-condiciones'
        }
    ]

    return (
        <Flex
            as="nav"
            role="navigation"
            pos={{ base: "fixed", lg: "fixed" }}
            bg="primary.1500"
            color="white"
            top="0"
            left="0"
            right="0"
            zIndex="sticky"
            alignSelf={'center'}
            justify="space-between"
        >
            <Container maxW={'5xl'} py={'12px'}>
                <HStack spacing="10" justify="space-between">
                    {isDesktop ? (
                        <Flex justify="space-between" flex="1">
                            <Link as={NavLink} to="/" alignSelf={'center'} _hover={{ textDecoration: 'none' }}>
                                    <Text
                                        fontSize="22px"
                                        alignSelf={'center'}
                                        fontWeight={'500'}
                                    >
                                        Himnario Adventista Quechua
                                    </Text>
                            </Link>
                            <HStack spacing="3">
                                <ButtonGroup 
                                    variant="link"
                                    colorScheme="gray" 
                                    spacing="4" 
                                    display={{
                                        base: "none",
                                        lg: "inline-flex"
                                    }}
                                >
                                    {
                                        itemsNavigation.map((item, index) => (
                                            <Button
                                                key={index}
                                                as={NavLink}
                                                to={item.url}
                                                variant="link"
                                                colorScheme="gray"
                                                _activeLink={{
                                                    color: 'white',
                                                }}
                                                color={'whiteAlpha.700'}
                                                _hover={{ textDecoration: 'none' }}
                                            >
                                                {item.name}
                                            </Button>
                                        ))
                                    }
                                </ButtonGroup>
                                <Divider orientation='vertical' h={6} bg={'white'} _dark={{ bg: 'white' }} />
                                <ColorModeSwitcher />
                            </HStack>
                        </Flex>
                    ) : (
                        <Flex justify="space-between" flex="1">
                            <Link as={NavLink} to="/" alignSelf={'center'} _hover={{ textDecoration: 'none' }}>
                                    <Text
                                        fontSize="16px"
                                        alignSelf={'center'}
                                        fontWeight={'500'}
                                    >
                                        Himnario Adventista Quechua
                                    </Text>
                            </Link>
                            <HStack spacing={1} alignSelf={'center'}>
                                <ColorModeSwitcher />
                                <Divider orientation='vertical' h={6} bg={'white'} _dark={{ bg: 'white' }} />
                                <IconButton
                                    aria-label="Menu"
                                    onClick={sidebar.onOpen}
                                    display={{
                                        base: "inline-flex",
                                        lg: "none"
                                    }}
                                    fontSize="xl"
                                    alignSelf={'center'}
                                    variant='ghost'
                                    colorScheme="blackAlpha"
                                    color={'white'}
                                    rounded={'full'}
                                    icon={<HamburgerIcon />}
                                />
                                <Drawer
                                    isOpen={sidebar.isOpen}
                                    onClose={sidebar.onClose}
                                    placement="right"
                                    size="full"
                                >
                                    <DrawerOverlay />
                                    <DrawerContent
                                        _dark={{
                                            bg: 'primary.1500',
                                        }}
                                    >
                                        <DrawerCloseButton
                                            size={'lg'}
                                        />
                                        <Stack
                                            spacing={0}
                                            align="center"
                                            justify="center"
                                            direction="column"
                                            h="100%"
                                            w="100%"
                                            p={10}
                                        >
                                            <Text>
                                                Dashboard
                                            </Text>
                                        </Stack>
                                    </DrawerContent>
                                </Drawer>
                            </HStack>
                        </Flex>
                    )}
                </HStack>
            </Container>
        </Flex>
    );
}

export default Header;