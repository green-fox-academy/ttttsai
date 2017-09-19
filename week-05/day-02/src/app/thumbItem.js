var React = require('react');

var ThumbItem = React.createClass({
    getInitialState:function(){
        return {
            hover: false
        } 
    },
    clicked:function(e){
        if(this.props.last){
            this.props.showNextThumbs();
        }
        this.props.changePhoto(this.props.location);
    },
    
    handleMouseIn:function(){
        this.setState({
            hover:true
        });
    },

    handleMouseOut:function(){
        this.setState({
            hover:false
        });
    },

    render:function(){
        var style = {
            backgroundImage: "url('"+ this.props.value.src + "')"
        };
        var tooltipStyle = {
            display: this.state.hover ? 'block' : 'none'
        }
        return (
            <li>
                <button onMouseOver={this.handleMouseIn} onMouseOut={this.handleMouseOut} className="thumb" style={style} title={this.props.value.hint} onClick={this.clicked} ></button>
                <div>
                    <div className="tooltips" style={tooltipStyle}>{this.props.value.hint}</div>
                </div>
            </li>
        );
    }
});

module.exports = ThumbItem;