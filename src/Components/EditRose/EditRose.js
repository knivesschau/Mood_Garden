import React, {Component} from 'react';
import './EditRose.css';

export default class EditRose extends Component {
    render() {
        return (
            <section className="EditRose">
                
                <div className="Rose__Editor">
                    
                    <form className="">

                    
                    <h1>Edit Your Rose</h1>

                    <p>Date Planted: 2020-04-10</p>
                    
                    <div className="Rose_Edit">
                        <h2>Rose</h2>
                        
                        <textarea name="edit-rose" rows="15">I got to video chat with my family and eat dinner together virtually. We made eggplant parmesean together!</textarea>
                    </div>
                    
                    <div className="Thorn_Edit">
                        <h2>Thorn</h2>

                        <textarea name="edit-thorn" rows="15">Even though I saw my family via video chat, I realized how much I missed them today and it mad me sad that I haven't been able to see them for a long time.</textarea>

                    </div>

                    <div className="Bud_Edit">
                        <h2>Bud</h2>

                        <textarea name="edit-bud" rows="15">I'm looking forward to seeing my family again once shelter-in-place is over.</textarea>
                    </div>

                    <button type="submit" id="update-garden">Update Garden</button>
                    
                    </form>

                </div>
            
            </section>
        );
    }
}