import styles from './Article.module.css';

const Article = props => {
    const slogans = new Array(18);
    for(let i =0;i<18;i+=2){
        if(i === 2)
            slogans[i] = (
                <div className = {styles.sloganContainer}  key = {i}>
                    <div className = {styles.leftDiv}>Click to Copy</div>
                    <div className = {styles.slogans1}>There is no Sore it will Not Heal, No cool it will not Subdue.</div>
                    <div className = {styles.slogans2}>Review the facts cool is the best.</div>
                </div>
            );
        else if(i === 4)
                slogans[i] = (
                    <div className = {styles.sloganContainer}  key = {i}>
                        <div className = {styles.leftDiv}>Copied!</div>
                        <div className = {styles.slogans1}>Review the facts cool is the best.</div>
                        <div className = {styles.slogans2}>coziness building for tomorrow</div>
                    </div>
                )
        else    
            slogans[i] = (
                <div className = {styles.sloganContainer} key = {i} >
                    <div className = {styles.slogans1}>There is no Sore it will Not Heal, No cool it will not Subdue.</div>
                    <div className = {styles.slogans2}>coziness building for tomorrow</div>
                </div>
            )
    }
    return (
        <div id = {styles.article}>
            <div id = {styles.container}>
                <h1 id = {styles.heading}>Free slogan maker</h1>
                <p>
                    Simply enter a term that describes your business, and get up to 1,000 relevant slogans for free.
                </p>
                <p id = {styles.label}>Word for your slogan</p>
                <input type = 'text' id = {styles.search} placeholder = 'Enter the search text'/>
                <div id = {styles.button1}>Generate Slogans</div>
                <hr/>
                <div id = {styles.subheading}>
                    <p>We have generated 1,023 slogans for "cozy"</p>
                    <div id = {styles.button2}>Download All</div>
                </div>
                {slogans}
                <br/>
                <hr/>
                <div id = {styles.pages}>
                    <div id = {styles.pagesList}>
                        <div id = {styles.circle}>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>...</div>
                        <div>21</div>
                    </div>
                    <a href = '#' id = {styles.next}>Next &gt;</a>
                </div>
            </div>
        </div>
    );
}

export default Article;