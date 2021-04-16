import React from 'react';
import '../style/ArticleWrite.css';
const ArticleWrite = () => {
    return (
        <>
            <h2>글쓰기</h2>
            <form>
                <table>
                    <tr>
                        <td>WRITER</td>
                        <td>
                            <input type="text" name="writer" />
                        </td>
                    </tr>
                    <tr>
                        <td>SUBJECT</td>
                        <td>
                            <input type="text" name="subject" />
                        </td>
                    </tr>
                    <tr>
                        <td>CONTENT</td>
                        <td>
                            <textarea name="content"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <button className="basic-btn">전송</button>
                        </td>
                    </tr>
                </table>
            </form>
        </>
    );
};
export default ArticleWrite;