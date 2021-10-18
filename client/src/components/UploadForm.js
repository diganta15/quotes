import React,{useRef} from 'react'

export const UploadForm = () => {
    const data = useRef({
        author:"",
        quote:"",
        date: "",
    });

    const onSubmit = async(e)=>{
        e.preventDefault();

        data.current = {
            ...data,
            author: e.target.author.value,
            quote: e.target.quote.value,
            date: Date(),
        }

        //TODO Submit data to database
   

        console.log(data);
    }

    return (
        <div className="container">
            <form onSubmit={onSubmit} >
                <div className="field">
                    <label htmlFor="author" className="label">Author</label>
                    <div className="control">
                        <input className="input" name="author" type="text" placeholder="Author" />
                    </div>
                    <p className="help">Enter the name of the person who said/wrote the quote</p>
                </div>

           <div className="field">
               <label htmlFor="quote" className="label">Quote</label>
               <div className="control">
                  <textarea name="quote" id="" cols="30" rows="10" className="input" placeholder="Quote"></textarea>
               </div>
           </div>
            <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
