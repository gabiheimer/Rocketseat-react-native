import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Main from './pages/main';
import Product from './pages/product';

const navigation = createStackNavigator(
    {
        Main: {
            screen: Main
        },
        Product: {
            screen: Product
        }
    }, 
    {
        initialRouteName: 'Main',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#da552f"
            },
            headerTintColor: '#fff',
            ...TransitionPresets.SlideFromRightIOS
        }
    }
);

export default createAppContainer(navigation);