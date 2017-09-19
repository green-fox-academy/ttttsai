var React = require('react');
var ThumbItem = require('./thumbItem');

var Thumbnails = React.createClass({
    getInitialState:function(){
        return {
            start:0,
            displayNum:3
        };
    },
    clickLeftThumbs:function(e){
        var start = this.state.start;
        if(start > 0){
            this.setState({
                start: start-1
            });
        }   
    },
    clickRightThumbs:function(e){
        var start = this.state.start;
        if(start + this.state.displayNum  < this.props.dataLength - 1){
            this.setState({
                start: start+1
            });
        }
        
    },
    showNextThumbs:function(){
        this.clickRightThumbs();
    },
    render:function(){
        var thumbItemData = [];
        for(var i = 0; i < this.state.displayNum; i++){
            thumbItemData.push(this.props.data[this.state.start + i]);
        }
        var thumbItems = thumbItemData.map(function(item, index){
            var last = index === this.state.displayNum - 1;
            return (
                <ThumbItem value={item} key={index} showNextThumbs={this.showNextThumbs} changePhoto={this.props.changePhoto} location={this.state.start + index} last={last}/>
            );
        }.bind(this));
        //thumbItems[this.state.displayNum - 1]
        return (
            <div className="thumbnails">
                <button className="thumbLeftBtn thumBtn" onClick={this.clickLeftThumbs}> </button>
                <ul>{thumbItems}</ul> 
                <button className="thumbRightBtn thumBtn" onClick={this.clickRightThumbs}> </button>
                               
            </div> 
        );
    }
});

module.exports = Thumbnails;