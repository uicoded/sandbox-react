import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const MutationObserversDemo = () => {
  const charTargetRef = useRef<HTMLDivElement>(null);
  const attributeTargetRef = useRef<HTMLDivElement>(null);
  const childListTargetRef = useRef<HTMLDivElement>(null);
  
  const [attributeChanges, setAttributeChanges] = useState<string[]>([]);
  const [childListChanges, setChildListChanges] = useState<string[]>([]);
  const [characterChanges, setCharacterChanges] = useState<string[]>([]);

  useEffect(() => {
    if (!charTargetRef.current || !attributeTargetRef.current || !childListTargetRef.current) return;

    // Observer for character data changes
    const characterObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'characterData') {
          setCharacterChanges(prev => [...prev, 
            `Text changed from "${mutation.oldValue}" to "${mutation.target.nodeValue}"`
          ]);
        }
      });
    });

    // Observer for attribute changes
    const attributeObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        setAttributeChanges(prev => [...prev,
          `${mutation.attributeName} changed from "${mutation.oldValue}" to "${mutation.target.getAttribute(mutation.attributeName!)}"`
        ]);
      });
    });

    // Observer for child list changes
    const childListObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        const change = mutation.type === 'childList' 
          ? `${mutation.addedNodes.length ? 'Added' : 'Removed'} nodes: ${mutation.addedNodes.length || mutation.removedNodes.length}`
          : 'Unknown change';
        setChildListChanges(prev => [...prev, change]);
      });
    });

    // Configure and start observers
    characterObserver.observe(charTargetRef.current, {
      characterData: true,
      characterDataOldValue: true,
      childList: true,
      subtree: true
    });

    attributeObserver.observe(attributeTargetRef.current, {
      attributes: true,
      attributeOldValue: true
    });

    childListObserver.observe(childListTargetRef.current, {
      childList: true
    });

    return () => {
      characterObserver.disconnect();
      attributeObserver.disconnect();
      childListObserver.disconnect();
    };
  }, []);

  const handleTextChange = () => {
    if (charTargetRef.current) {
      const textNode = charTargetRef.current.firstChild;
      if (textNode) {
        // Modify existing text node
        textNode.nodeValue = `Changed at ${new Date().toLocaleTimeString()}`;
      } else {
        // Create new text node if none exists
        charTargetRef.current.appendChild(
          document.createTextNode(`Changed at ${new Date().toLocaleTimeString()}`)
        );
      }
    }
  };

  const handleAttributeChange = () => {
    if (attributeTargetRef.current) {
      attributeTargetRef.current.setAttribute('data-test', 
        `value-${Math.random().toString(36).slice(2, 7)}`
      );
    }
  };

  const handleAddChild = () => {
    if (childListTargetRef.current) {
      const newElement = document.createElement('div');
      newElement.textContent = `Child ${childListTargetRef.current.children.length + 1}`;
      childListTargetRef.current.appendChild(newElement);
    }
  };

  const handleRemoveChild = () => {
    if (childListTargetRef.current && childListTargetRef.current.lastChild) {
      childListTargetRef.current.removeChild(childListTargetRef.current.lastChild);
    }
  };

  // debugger
  console.log("Hi from Mutation Observer");


  return (
    <div className="mutation-observers-demo">
      <Link to="/" className="back-button">← Back to Index</Link>
      <h1>MutationObserver Examples</h1>

      <section>
        <h2>1. Character Data Observer</h2>
        <div ref={charTargetRef}>Click button to change this text</div>
        <button onClick={handleTextChange}>Change Text</button>
        <div className="changes">
          <h3>Changes:</h3>
          {characterChanges.map((change, i) => (
            <div key={i}>{change}</div>
          ))}
        </div>
      </section>

      <section>
        <h2>2. Attribute Observer</h2>
        <div ref={attributeTargetRef} data-test="initial-value">
          This div's attributes will change
        </div>
        <button onClick={handleAttributeChange}>Change Attribute</button>
        <div className="changes">
          <h3>Changes:</h3>
          {attributeChanges.map((change, i) => (
            <div key={i}>{change}</div>
          ))}
        </div>
      </section>

      <section>
        <h2>3. Child List Observer</h2>
        <div ref={childListTargetRef}>
          <div>Initial child</div>
        </div>
        <button onClick={handleAddChild}>Add Child</button>
        <button onClick={handleRemoveChild}>Remove Child</button>
        <div className="changes">
          <h3>Changes:</h3>
          {childListChanges.map((change, i) => (
            <div key={i}>{change}</div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MutationObserversDemo; 