import React from 'react';
import ReactDom from 'react-dom'

/**
 * 通过nextState阻止不必要的更新：
 */
class App extends React.Component {
    state = {
        count: 0
    }

    handleClick = () => {
        this.setState(() => {
            return {
                count: Math.floor(Math.random() * 2)
            }
        })
    }

    render() {
        const el = (
            <div>
                <h1>随机数：</h1>
                <p>{this.state.count}</p>
                <button onClick={this.handleClick}>重新生成</button>
            </div>

        )
        console.log(el)
        return el
    }
}

ReactDom.render(<App />, document.getElementById('root'))