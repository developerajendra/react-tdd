import React from 'react'

function Count({text, count}) {
     console.log('text:', text, 'count: ', count);
     
    return (
        <div>
            {text } - {count}
        </div>
    )
}

export default React.memo(Count)
