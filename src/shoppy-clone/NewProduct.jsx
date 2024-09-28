import React, { useState } from "react";
import Button from "./components/ui/Button";
import { uploadImage } from "./api/upload";
import { addNewProduct } from "./api/firebase";

function NewProduct(props) {
    const [product, setProduct] = useState({});
    const [file, setFile] = useState();
    const [isUploading, setIsUploading] = useState(false);
    const [success, setSuccess] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsUploading(true);
        uploadImage(file).then((url) => {
            addNewProduct(product, url)
                .then(() => {
                    setSuccess("성공적으로 제품이 추가되었습니다.");
                    setTimeout(() => {
                        setSuccess(null);
                    }, 4000);
                })
                .finally(() => setIsUploading(false));
        });
    };
    // input의 이름으로 어떤 input의 change인지 구분해서 실행되는 함수
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "file") {
            setFile(files && files[0]); // files가 존재하면 files의 첫번째 파일만 입력
            return;
        }
        setProduct((product) => ({ ...product, [name]: value })); // key를 표현하는 대괄호에 주의
    };
    return (
        <section>
            <h2>새로운 제품 등록</h2>
            {success && <p>✅ {success}</p>}
            <form onSubmit={handleSubmit}>
                {file && (
                    <img src={URL.createObjectURL(file)} alt="local file" /> // file object을 img 태그에 보여주는 법
                )}
                <input
                    type="file"
                    accept="image/*"
                    name="file"
                    required
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="title"
                    value={product.title ?? ""}
                    placeholder="제품명"
                    required
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="price"
                    value={product.price ?? ""}
                    placeholder="가격"
                    required
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="category"
                    value={product.category ?? ""}
                    placeholder="카테고리"
                    required
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="description"
                    value={product.description ?? ""}
                    placeholder="제품 설명"
                    required
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="options"
                    value={product.options ?? ""}
                    placeholder="옵션들(콤마(,)로 구분)"
                    required
                    onChange={handleChange}
                />
                <Button
                    text={isUploading ? "업로드중..." : "제품 등록하기"}
                    disabled={isUploading}
                />
            </form>
        </section>
    );
}

export default NewProduct;
